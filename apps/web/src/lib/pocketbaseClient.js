import Pocketbase from 'pocketbase';
import { fallbackArticles as initialFallbackArticles } from '@/data/articlesFallbackData.js';

const POCKETBASE_API_URL = '/hcgi/platform';
const pocketbaseClient = new Pocketbase(POCKETBASE_API_URL);

const fallbackState = {
  articles: structuredClone(initialFallbackArticles),
};

const FALLBACK_COLLECTIONS = new Set(['articles']);

function normalizeValue(value) {
  if (typeof value !== 'string') return value;
  return value.trim().replace(/^['"]|['"]$/g, '');
}

function matchesCondition(record, condition) {
  const trimmed = condition.trim();
  if (!trimmed) return true;

  const operators = ['!=', '='];
  for (const operator of operators) {
    const index = trimmed.indexOf(operator);
    if (index > -1) {
      const field = trimmed.slice(0, index).trim();
      const expected = normalizeValue(trimmed.slice(index + operator.length).trim());
      const actual = record[field];
      if (operator === '!=') {
        return String(actual ?? '') !== String(expected ?? '');
      }
      return String(actual ?? '') === String(expected ?? '');
    }
  }

  return true;
}

function applyFilter(records, filter) {
  if (!filter) return records;
  return records.filter((record) =>
    filter
      .split('&&')
      .every((condition) => matchesCondition(record, condition)),
  );
}

function compareForSort(a, b, field, direction) {
  const aValue = a?.[field];
  const bValue = b?.[field];
  const aDate = aValue ? new Date(aValue) : null;
  const bDate = bValue ? new Date(bValue) : null;

  const aComparable = aDate && !Number.isNaN(aDate.getTime()) ? aDate.getTime() : aValue ?? '';
  const bComparable = bDate && !Number.isNaN(bDate.getTime()) ? bDate.getTime() : bValue ?? '';

  if (aComparable < bComparable) return -1 * direction;
  if (aComparable > bComparable) return 1 * direction;
  return 0;
}

function applySort(records, sort) {
  if (!sort) return records;
  const fields = sort.split(',').map((field) => field.trim()).filter(Boolean);
  if (fields.length === 0) return records;

  return [...records].sort((a, b) => {
    for (const field of fields) {
      const direction = field.startsWith('-') ? -1 : 1;
      const key = field.replace(/^[-+]/, '');
      const result = compareForSort(a, b, key, direction);
      if (result !== 0) return result;
    }
    return 0;
  });
}

function paginate(records, page = 1, perPage = 30) {
  const safePage = Math.max(1, Number(page) || 1);
  const safePerPage = Math.max(1, Number(perPage) || 30);
  const totalItems = records.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / safePerPage));
  const start = (safePage - 1) * safePerPage;
  const items = records.slice(start, start + safePerPage);

  return { page: safePage, perPage: safePerPage, totalItems, totalPages, items };
}

function clone(value) {
  return structuredClone(value);
}

function isEmptyListResponse(response) {
  if (!response) return true;
  if (Array.isArray(response)) return response.length === 0;
  if (Array.isArray(response.items)) return response.items.length === 0;
  return false;
}

function fallbackCollection(collectionName) {
  const isFallbackCollection = FALLBACK_COLLECTIONS.has(collectionName);

  const getRecords = () => {
    if (!isFallbackCollection) return [];
    return fallbackState[collectionName] || [];
  };

  const setRecords = (records) => {
    if (isFallbackCollection) {
      fallbackState[collectionName] = records;
    }
  };

  return {
    async getList(page = 1, perPage = 30, options = {}) {
      const filtered = applyFilter(getRecords(), options.filter);
      const sorted = applySort(filtered, options.sort);
      return paginate(sorted, page, perPage);
    },
    async getFullList(options = {}) {
      const filtered = applyFilter(getRecords(), options.filter);
      return applySort(filtered, options.sort);
    },
    async getOne(id, options = {}) {
      const record = applyFilter(getRecords(), options.filter).find((item) => item.id === id);
      if (!record) {
        const error = new Error('Record not found');
        error.status = 404;
        throw error;
      }
      return clone(record);
    },
    async create(data) {
      const nextRecord = {
        id: `local_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
        ...clone(data),
      };
      const records = [...getRecords(), nextRecord];
      setRecords(records);
      return clone(nextRecord);
    },
    async update(id, data) {
      const records = getRecords().map((record) =>
        record.id === id
          ? { ...record, ...clone(data), updated: new Date().toISOString() }
          : record,
      );
      const updated = records.find((record) => record.id === id);
      if (!updated) {
        const error = new Error('Record not found');
        error.status = 404;
        throw error;
      }
      setRecords(records);
      return clone(updated);
    },
    async delete(id) {
      const records = getRecords();
      const nextRecords = records.filter((record) => record.id !== id);
      if (nextRecords.length === records.length) {
        const error = new Error('Record not found');
        error.status = 404;
        throw error;
      }
      setRecords(nextRecords);
      return { success: true };
    },
    async authWithPassword() {
      throw new Error('Authentication is unavailable while the backend is offline.');
    },
  };
}

const realCollection = pocketbaseClient.collection.bind(pocketbaseClient);

pocketbaseClient.collection = function collectionWithFallback(collectionName) {
  const liveCollection = realCollection(collectionName);
  const fallback = fallbackCollection(collectionName);

  const shouldFallbackToLocal = (result) => {
    if (!FALLBACK_COLLECTIONS.has(collectionName)) return false;
    return isEmptyListResponse(result);
  };

  const wrap = (methodName) => async (...args) => {
    try {
      const result = await liveCollection[methodName](...args);

      if ((methodName === 'getList' || methodName === 'getFullList') && shouldFallbackToLocal(result)) {
        return fallback[methodName](...args);
      }

      return result;
    } catch (error) {
      if (!FALLBACK_COLLECTIONS.has(collectionName)) {
        throw error;
      }
      return fallback[methodName](...args);
    }
  };

  return {
    ...liveCollection,
    getList: wrap('getList'),
    getFullList: wrap('getFullList'),
    getOne: wrap('getOne'),
    create: wrap('create'),
    update: wrap('update'),
    delete: wrap('delete'),
    authWithPassword: liveCollection.authWithPassword.bind(liveCollection),
  };
};

export default pocketbaseClient;

export { pocketbaseClient };
