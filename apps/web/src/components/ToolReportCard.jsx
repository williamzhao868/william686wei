
import React, { useState } from 'react';
import { Calendar, FileText, ExternalLink, Star, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { toast } from 'sonner';
import { downloadPdfRecord, hasPdfAsset, resolvePdfFilename } from '@/lib/pdfUtils.js';

function ToolReportCard({ report, index = 0 }) {
  const { language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  
  const formattedDate = report.date ? new Date(report.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';

  const hasPdf = hasPdfAsset(report);
  const pdfFilename = resolvePdfFilename(report, 'report.pdf');
  
  // Generate a random score on initial mount (3.5, 4, 4.5, or 5)
  const [randomScore] = useState(() => {
    const scores = [3.5, 4, 4.5, 5];
    return scores[Math.floor(Math.random() * scores.length)];
  });

  const handleDownloadPDF = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!hasPdf) {
      toast.error(language === 'zh' ? 'PDF文件不可用' : 'PDF not available');
      return;
    }

    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      await downloadPdfRecord(report, { fallbackName: pdfFilename });

      toast.success(language === 'zh' ? '下载完成' : 'Download completed');
    } catch (err) {
      console.error('Download error:', err);
      toast.error(language === 'zh' ? '下载PDF失败。文件可能不存在或网络有问题。' : 'Failed to download PDF. File might not exist or network error.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
            <FileText className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold leading-snug mb-1 line-clamp-2 group-hover:text-primary transition-colors">
              {report.toolName || report.title}
            </h3>
            {report.category && (
              <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                {report.category}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center bg-muted rounded-xl px-3 py-2 min-w-[72px] border border-border/50">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5 flex items-center gap-1">
              <Star className="w-3 h-3 fill-primary/20 text-primary" />
              Score
            </span>
            <div className="flex items-baseline text-xl font-extrabold text-primary" style={{ fontVariantNumeric: 'tabular-nums' }}>
              {randomScore}
              <span className="text-xs font-semibold text-muted-foreground ml-0.5">/5</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
          {report.summary || report.shortDescription || report.description || 'No description available.'}
        </p>

        <div className="mt-auto pt-4 border-t border-border/50">
          <div className="flex justify-between items-center mb-4">
            {formattedDate && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={report.date}>{formattedDate}</time>
              </div>
            )}
            {report.websiteUrl && (
              <a 
                href={report.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {language === 'zh' ? '访问网站' : 'Visit Site'}
              </a>
            )}
          </div>

          <div className="flex gap-2">
            {hasPdf ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full rounded-xl text-xs transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={handleDownloadPDF}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                ) : (
                  <FileText className="w-3.5 h-3.5 mr-1.5" />
                )}
                {language === 'zh' 
                  ? (isDownloading ? '下载中...' : '下载评测 PDF') 
                  : (isDownloading ? 'Downloading...' : 'Download Benchmark PDF')}
              </Button>
            ) : (
              <Button 
                variant="secondary" 
                size="sm" 
                disabled 
                className="w-full rounded-xl text-xs opacity-70 cursor-not-allowed"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5 opacity-50" />
                {language === 'zh' ? '下载评测 PDF' : 'Download Benchmark PDF'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ToolReportCard;
