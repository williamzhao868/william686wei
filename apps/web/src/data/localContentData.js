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
const insightDateMap = new Map((contentData.insights || []).map((item) => [String(item.date || '').slice(0, 10), item]));

function normalizeInsightContent(insight) {
  if (!insight) return null;

  return {
    ...insight,
    type: 'A',
    summary: insight.summary || insight.shortDescription || insight.description || '',
    content: insight.content || insight.contentMarkdown || '',
    pdfUrl: insight.pdfUrl || (insight.pdfFileName ? `/reports/pdf/${insight.pdfFileName}` : ''),
    pdfFileName: insight.pdfFileName || '',
  };
}

function normalizeToolContent(tool) {
  if (!tool) return null;

  return {
    ...tool,
    type: 'C',
    toolName: tool.toolName || tool.name || '',
    title: tool.title || (tool.name ? `${tool.name}｜AI Tool Benchmark Report` : ''),
    summary: tool.summary || tool.shortDescription || tool.fullDescription || '',
    shortDescription: tool.shortDescription || tool.summary || tool.fullDescription || '',
    fullDescription: tool.fullDescription || tool.content || tool.summary || '',
    content: tool.content || tool.fullDescription || tool.shortDescription || '',
    score: tool.score || tool.overallScore || (tool.recommendationStars ? tool.recommendationStars * 2 : 0),
    websiteUrl: tool.websiteUrl || tool.website || '',
    website: tool.website || tool.websiteUrl || '',
    pdfUrl: tool.pdfUrl || (tool.pdfFileName ? `/reports/pdf/${tool.pdfFileName}` : ''),
    pdfFileName: tool.pdfFileName || '',
  };
}

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
    pickFirstMatch(
      { reportDate: String(record?.date || record?.created || '').slice(0, 10) },
      [insightDateMap],
      ['reportDate']
    ) ||
    pickFirstMatch(record, [insightTitleMap], ['title']) ||
    pickFirstMatch(record, [insightPdfMap], ['pdfFileName']) ||
    null
  );
}

export function getLocalInsightArticleByRecord(record) {
  return normalizeInsightContent(getLocalInsightByRecord(record));
}

export function getLocalInsightArticles() {
  return (contentData.insights || []).map((insight) => normalizeInsightContent(insight)).filter(Boolean);
}

export function getLocalToolByRecord(record) {
  return (
    pickFirstMatch(record, [toolMap], ['id']) ||
    pickFirstMatch(record, [toolTitleMap], ['title', 'toolName']) ||
    pickFirstMatch(record, [toolPdfMap], ['pdfFileName']) ||
    null
  );
}

export function getLocalToolArticleByRecord(record) {
  return normalizeToolContent(getLocalToolByRecord(record));
}

export function getLocalToolArticles() {
  return (contentData.tools || []).map((tool) => normalizeToolContent(tool)).filter(Boolean);
}

export function mergeWithLocalContent(liveRecord, localRecord) {
  if (!localRecord) return liveRecord;

  const merged = { ...liveRecord };
  const preferredFields = [
    'content',
    'contentMarkdown',
    'pdfFileName',
    'pdfUrl',
    'websiteUrl',
    'website',
    'summary',
    'shortDescription',
    'fullDescription',
    'title',
    'date',
    'category',
    'toolName',
    'score',
  ];

  for (const field of preferredFields) {
    const localValue = localRecord?.[field];
    if (localValue != null && localValue !== '') {
      merged[field] = localValue;
    }
  }

  return merged;
}

export default contentData;
