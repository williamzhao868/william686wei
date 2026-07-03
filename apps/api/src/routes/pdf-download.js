import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

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

  if (!article.pdfUrl) {
    throw new Error(`PDF URL not available for article: ${articleId}`);
  }

  logger.info(`PDF download URL retrieved for article ${articleId}`);

  res.json({ pdfUrl: article.pdfUrl });
});

export default router;
