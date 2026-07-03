import express from 'express';
import pb from '../utils/pocketbaseClient.js';
import logger from '../utils/logger.js';

const router = express.Router();

const toolNameToDateMapping = {
  'Hera': '06082026',
  'Microsoft Agents': '06092026',
  'Tavus': '06112026',
  'Asana Dash': '06122026',
  'Google AI Studio': '06152026',
  'Meta Business Agent': '06162026',
  'OpenAI Codex': '06162026',
  'Claude Code Security': '06172026',
  'Bond': '06182026',
  'Facebook AI Tools': '06182026',
  'Fyxer': '06222026',
  'Read AI': '06232026',
  'Wispr Flow': '06232026',
  'Readywhen': '06242026',
};

router.post('/', async (req, res) => {
  logger.info('Starting PDF filename fix process');

  const articles = await pb.collection('articles').getFullList();
  logger.info(`Retrieved ${articles.length} articles from PocketBase`);

  const updatedCount = 0;
  const details = [];
  const errors = [];

  for (const article of articles) {
    const { id, pdfFileName, toolName } = article;

    if (!pdfFileName || !pdfFileName.includes('06262026')) {
      continue;
    }

    const correctDate = toolNameToDateMapping[toolName];

    if (!correctDate) {
      errors.push({
        id,
        toolName,
        reason: `No mapping found for toolName: ${toolName}`,
      });
      continue;
    }

    const newFileName = pdfFileName.replace('06262026', correctDate);

    await pb.collection('articles').update(id, { pdfFileName: newFileName });

    details.push({
      id,
      toolName,
      oldFileName: pdfFileName,
      newFileName,
    });

    logger.info(`Updated article ${id}: ${pdfFileName} → ${newFileName}`);
  }

  logger.info(`PDF filename fix completed. Updated: ${details.length}, Errors: ${errors.length}`);

  res.json({
    success: true,
    updatedCount: details.length,
    details,
    errors,
  });
});

export default router;