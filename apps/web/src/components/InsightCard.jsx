import React, { useState } from 'react';
import { Calendar, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { downloadPdfRecord, hasPdfAsset, resolvePdfFilename } from '@/lib/pdfUtils.js';
import { formatDateISO } from '@/lib/dateFormat.js';

function InsightCard({ insight, index = 0 }) {
  const { language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  
  const dateToUse = insight.date || insight.created;
  const formattedDate = formatDateISO(dateToUse);

  const hasPdf = hasPdfAsset(insight);
  const pdfFilename = resolvePdfFilename(insight, 'insight.pdf');

  const handleDownload = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!hasPdf || isDownloading) return;

    setIsDownloading(true);
    try {
      await downloadPdfRecord(insight, { fallbackName: pdfFilename });
    } catch (err) {
      console.error('Insight PDF download failed:', err);
      toast.error(language === 'zh' ? '下载PDF失败' : 'Failed to download PDF');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex flex-col bg-card text-card-foreground rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 p-6"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {formattedDate && (
          <div className="flex items-center text-xs text-muted-foreground ml-auto">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <time dateTime={dateToUse}>{formattedDate}</time>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
        {insight.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-4">
        {insight.summary || insight.description || (language === 'zh' ? '暂无摘要' : 'No summary available.')}
      </p>

      {hasPdf && (
        <div className="mt-auto pt-4 border-t border-border/50">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:brightness-110 active:scale-[0.98] w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4 mr-2" />
            {isDownloading
              ? (language === 'zh' ? '下载中...' : 'Downloading...')
              : (language === 'zh' ? '下载PDF' : 'Download PDF')}
          </button>
        </div>
      )}
    </motion.article>
  );
}

export default InsightCard;
