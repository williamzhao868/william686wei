import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, ChevronLeft, ChevronRight, Tag, Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { Button } from '@/components/ui/button.jsx';

const categoryColors = {
  'Research Update': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  '研究更新': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Team Announcement': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  '团队公告': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Project Milestone': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  '项目里程碑': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
};

function LabNewsDetailModal({ 
  isOpen, 
  onClose, 
  newsItem, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}) {
  const { language } = useLanguage();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!newsItem) return null;

  const item = language === 'zh' && newsItem.zh ? { ...newsItem, ...newsItem.zh } : newsItem;

  const formattedDate = new Date(item.date).toLocaleDateString(
    language === 'zh' ? 'zh-CN' : 'en-US', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-overlay"
            onClick={onClose}
            aria-hidden="true"
          />

          <div className="modal-content-wrapper pointer-events-none">
            <motion.div 
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
              className="modal-card pointer-events-auto"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 rounded-full bg-background/50 backdrop-blur-md border border-border/50 hover:bg-muted shadow-sm"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>

              {item.image && (
                <div className="w-full h-64 sm:h-80 shrink-0 relative bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${categoryColors[item.category] || 'bg-background/80 text-foreground'}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col gap-6">
                {!item.image && (
                  <div className="mb-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[item.category] || 'bg-muted text-muted-foreground'}`}>
                      {item.category}
                    </span>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold leading-snug text-balance">
                    {item.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={item.date}>{formattedDate}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-4 w-4" />
                      <span>{item.source || (language === 'zh' ? 'Engma 实验室' : 'Engma Lab')}</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  <p>{item.description}</p>
                </div>

                {item.keywords && item.keywords.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                    <Tag className="h-4 w-4 text-muted-foreground mr-1" />
                    {item.keywords.map(kw => (
                      <span key={kw} className="px-2 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto p-4 sm:p-6 border-t border-border bg-muted/20 flex items-center justify-between">
                <Button 
                  variant="outline" 
                  onClick={onPrev} 
                  disabled={!hasPrev}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">{language === 'zh' ? '上一条' : 'Previous'}</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={onNext} 
                  disabled={!hasNext}
                  className="rounded-full"
                >
                  <span className="hidden sm:inline">{language === 'zh' ? '下一条' : 'Next'}</span>
                  <ChevronRight className="h-4 w-4 sm:ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default LabNewsDetailModal;