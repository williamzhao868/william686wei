import { Router } from 'express';
import healthCheck from './health-check.js';
import fixPdfFilenamesRouter from './fix-pdf-filenames.js';
import pdfDownloadRouter from './pdf-download.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.use('/fix-pdf-filenames', fixPdfFilenamesRouter);
    router.use('/pdf-download', pdfDownloadRouter);

    return router;
};
