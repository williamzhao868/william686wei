import React from 'react';
import { Calendar, FileText, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { hasPdfAsset, resolvePdfFilename, resolvePdfUrl } from '@/lib/pdfUtils.js';

const stripCategoryPrefix = (value = '') => String(value).replace(/^[A-Z]\s*[｜|]\s*/, '').trim();

function InsightCard({ insight, index = 0 }) {
  const { language } = useLanguage();
  
  const dateToUse = insight.date || insight.created;
  const formattedDate = dateToUse ? new Date(dateToUse).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';

  const pdfHref = resolvePdfUrl(insight);
  const hasPdf = hasPdfAsset(insight);
  const pdfFilename = resolvePdfFilename(insight, 'insight.pdf');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full flex flex-col bg-card text-card-foreground rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 p-6"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {insight.category && (
          <Badge variant="secondary" className="text-xs font-medium bg-secondary text-secondary-foreground">
            {stripCategoryPrefix(insight.category)}
          </Badge>
        )}
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
          <a
            href={pdfHref}
            download={pdfFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:brightness-110 active:scale-[0.98] w-full sm:w-auto"
          >
            <FileText className="w-4 h-4 mr-2" />
            {language === 'zh' ? '查看 PDF' : 'View PDF'}
            <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
          </a>
        </div>
      )}
    </motion.article>
  );
}

export default InsightCard;
