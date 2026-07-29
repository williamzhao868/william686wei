import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

function normalizePdfFileName(value) {
  return String(value || '').trim().split('/').filter(Boolean).pop() || '';
}

function buildLocalPdfUrl(fileName) {
  const normalized = normalizePdfFileName(fileName);
  return normalized ? `/reports/pdf/${encodeURIComponent(normalized)}` : '';
}

function getPdfBasenameFromUrl(url) {
  const normalized = String(url || '').trim();
  if (!normalized) return '';

  try {
    const parsed = new URL(normalized, 'https://example.com');
    return parsed.pathname.split('/').filter(Boolean).pop() || '';
  } catch {
    const cleaned = normalized.split('?')[0].split('#')[0];
    return cleaned.split('/').filter(Boolean).pop() || '';
  }
}

router.get('/:articleId', async (req, res) => {
  const { articleId } = req.params;

  if (!articleId) {
    return res.status(400).json({ error: 'articleId parameter is required' });
  }

  logger.info(`Fetching PDF download for article: ${articleId}`);

  const article = await pb.collection('articles').getOne(articleId);

  if (!article) {
    throw new Error(`Article not found: ${articleId}`);
  }

  const localPdfUrl =
    buildLocalPdfUrl(article.pdfFileName) ||
    buildLocalPdfUrl(getPdfBasenameFromUrl(article.pdfUrl));

  if (!localPdfUrl && !article.pdfUrl) {
    throw new Error(`PDF URL not available for article: ${articleId}`);
  }

  logger.info(`PDF download URL retrieved for article ${articleId}`);

  res.json({ pdfUrl: localPdfUrl || article.pdfUrl });
});

export default router;
