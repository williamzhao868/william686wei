import contentData from './Hostinger_A_C_Content_Data.json';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer noopener">$1</a>');
}

export function markdownToHtml(markdown = '') {
  const lines = String(markdown).replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let paragraph = [];
  let inList = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push(`<p>${applyInlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!inList) return;
    blocks.push('</ul>');
    inList = false;
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (/^-{3,}$/.test(line)) {
      flushParagraph();
      flushList();
      blocks.push('<hr />');
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      blocks.push(`<h${level}>${applyInlineMarkdown(headingMatch[2])}</h${level}>`);
      continue;
    }

    const bulletMatch = line.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      if (!inList) {
        blocks.push('<ul>');
        inList = true;
      }
      blocks.push(`<li>${applyInlineMarkdown(bulletMatch[1])}</li>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks.join('\n');
}

const insightMap = new Map((contentData.insights || []).map((item) => [item.id, item]));
const toolMap = new Map((contentData.tools || []).map((item) => [item.id, item]));
const insightTitleMap = new Map((contentData.insights || []).map((item) => [String(item.title || '').trim(), item]));
const toolTitleMap = new Map((contentData.tools || []).map((item) => [String(item.title || '').trim(), item]));
const insightPdfMap = new Map((contentData.insights || []).map((item) => [String(item.pdfFileName || '').trim(), item]));
const toolPdfMap = new Map((contentData.tools || []).map((item) => [String(item.pdfFileName || '').trim(), item]));

export function getLocalInsightById(id) {
  return insightMap.get(id) || null;
}

export function getLocalToolById(id) {
  return toolMap.get(id) || null;
}

function pickFirstMatch(record, maps, fields = []) {
  if (!record) return null;

  for (const field of fields) {
    const value = String(record[field] || '').trim();
    if (!value) continue;

    for (const map of maps) {
      const match = map.get(value);
      if (match) return match;
    }
  }

  return null;
}

export function getLocalInsightByRecord(record) {
  return (
    pickFirstMatch(record, [insightMap], ['id']) ||
    pickFirstMatch(record, [insightTitleMap], ['title']) ||
    pickFirstMatch(record, [insightPdfMap], ['pdfFileName']) ||
    null
  );
}

export function getLocalToolByRecord(record) {
  return (
    pickFirstMatch(record, [toolMap], ['id']) ||
    pickFirstMatch(record, [toolTitleMap], ['title', 'toolName']) ||
    pickFirstMatch(record, [toolPdfMap], ['pdfFileName']) ||
    null
  );
}

export function mergeWithLocalContent(liveRecord, localRecord) {
  if (!localRecord) return liveRecord;

  const merged = { ...localRecord, ...liveRecord };
  const fallbackFields = ['content', 'contentMarkdown', 'pdfFileName', 'pdfUrl', 'websiteUrl', 'summary', 'title', 'date', 'category'];

  for (const field of fallbackFields) {
    const liveValue = liveRecord?.[field];
    const fallbackValue = localRecord?.[field];
    if (liveValue == null || liveValue === '' || (field === 'content' && String(liveValue).includes('Full report available in PDF.'))) {
      if (fallbackValue != null && fallbackValue !== '') {
        merged[field] = fallbackValue;
      }
    }
  }

  return merged;
}

export default contentData;
