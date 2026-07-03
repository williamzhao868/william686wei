const DEFAULT_COS_PDF_BASE_URL =
  'https://engma-ai-lab-1447133791.cos.ap-shanghai.myqcloud.com/reports/pdf/';

const PLACEHOLDER_VALUES = new Set([
  '',
  'null',
  'undefined',
  '{pdfurl}',
  '/files/pdfs/{pdfurl}',
  '/files/pdfs/',
  '/files/pdfs'
]);

function normalizePdfValue(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isHttpUrl(value) {
  return /^https?:\/\//i.test(value);
}

function isPlaceholderPdfValue(value) {
  return PLACEHOLDER_VALUES.has(normalizePdfValue(value).toLowerCase());
}

function encodePathSegments(pathname) {
  return pathname
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function resolveRelativeUrl(pathname) {
  if (typeof window === 'undefined') {
    return pathname;
  }

  return new URL(pathname, window.location.origin).href;
}

export function resolvePdfUrl(record, { baseUrl = DEFAULT_COS_PDF_BASE_URL } = {}) {
  if (!record || typeof record !== 'object') return '';

  const pdfUrl = normalizePdfValue(record.pdfUrl);
  if (pdfUrl && !isPlaceholderPdfValue(pdfUrl)) {
    if (isHttpUrl(pdfUrl)) {
      return pdfUrl;
    }

    if (pdfUrl.startsWith('/') || pdfUrl.startsWith('./') || pdfUrl.startsWith('../')) {
      return resolveRelativeUrl(pdfUrl);
    }

    return `${baseUrl}${encodePathSegments(pdfUrl.replace(/^\/+/, ''))}`;
  }

  const pdfFileName = normalizePdfValue(record.pdfFileName);
  if (!pdfFileName || isPlaceholderPdfValue(pdfFileName)) {
    return '';
  }

  if (isHttpUrl(pdfFileName)) {
    return pdfFileName;
  }

  if (pdfFileName.startsWith('/') || pdfFileName.startsWith('./') || pdfFileName.startsWith('../')) {
    return resolveRelativeUrl(pdfFileName);
  }

  return `${baseUrl}${encodePathSegments(pdfFileName.replace(/^\/+/, ''))}`;
}

export function resolvePdfFilename(record, fallbackName = 'document.pdf') {
  if (!record || typeof record !== 'object') {
    return fallbackName;
  }

  const pdfFileName = normalizePdfValue(record.pdfFileName);
  if (pdfFileName && !isPlaceholderPdfValue(pdfFileName)) {
    const parts = pdfFileName.split('/');
    const lastPart = parts[parts.length - 1]?.trim();
    if (lastPart) {
      return lastPart;
    }
  }

  const pdfUrl = normalizePdfValue(record.pdfUrl);
  if (pdfUrl && !isPlaceholderPdfValue(pdfUrl)) {
    try {
      const base = typeof window !== 'undefined' ? window.location.href : 'https://example.com';
      const parsed = new URL(pdfUrl, base);
      const lastPart = parsed.pathname.split('/').filter(Boolean).pop();
      if (lastPart) {
        return decodeURIComponent(lastPart);
      }
    } catch {
      const path = pdfUrl.split('?')[0].split('#')[0];
      const lastPart = path.split('/').filter(Boolean).pop();
      if (lastPart) {
        return lastPart;
      }
    }
  }

  return fallbackName;
}

export function hasPdfAsset(record) {
  return Boolean(resolvePdfUrl(record));
}

export async function downloadPdfUrl(url, filename = 'document.pdf') {
  if (!url) {
    throw new Error('PDF URL is missing');
  }

  if (typeof window === 'undefined') {
    throw new Error('PDF download is only available in the browser');
  }

  const parsedUrl = new URL(url, window.location.href);
  const anchor = document.createElement('a');
  anchor.download = filename;

  try {
    const response = await fetch(parsedUrl.href);

    if (response.ok) {
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      anchor.href = blobUrl;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
      return;
    }
  } catch (err) {
    console.warn('PDF fetch failed, falling back to direct link.', err);
  }

  anchor.href = parsedUrl.href;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export async function downloadPdfRecord(record, options = {}) {
  const url = resolvePdfUrl(record, options);
  const filename = resolvePdfFilename(record, options.fallbackName);
  return downloadPdfUrl(url, filename);
}
