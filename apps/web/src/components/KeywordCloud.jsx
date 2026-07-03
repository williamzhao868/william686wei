import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { Hash, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { keywordsData, articlesData } from '@/data/articlesData.js';

function KeywordCloud({ activeKeywords = [], onKeywordClick }) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Calculate keyword frequencies from articlesData
  const keywordStats = useMemo(() => {
    const counts = {};
    // Initialize all keywords with 0
    keywordsData.forEach(k => { counts[k.id] = 0; });
    
    // Count occurrences in articles
    articlesData.forEach(article => {
      if (article.keywords && Array.isArray(article.keywords)) {
        article.keywords.forEach(kw => {
          if (counts[kw] !== undefined) {
            counts[kw]++;
          }
        });
      }
    });

    // Map counts back to keywords and sort by popularity
    return keywordsData.map(kw => ({
      ...kw,
      // Give a base count of 1 for visual scaling even if 0 occurrences
      count: counts[kw.id] || 1 
    })).sort((a, b) => b.count - a.count);
  }, []);
  
  const kwCounts = keywordStats.map(k => k.count);
  const minKwCount = Math.min(...kwCounts);
  const maxKwCount = Math.max(...kwCounts);
  
  const getFontSize = (count) => {
    const minSize = 0.8; // 12.8px
    const maxSize = 1.4; // 22.4px
    if (maxKwCount === minKwCount) return `${minSize}rem`;
    const scale = (count - minKwCount) / (maxKwCount - minKwCount);
    return `${minSize + scale * (maxSize - minSize)}rem`;
  };

  const getOpacity = (count) => {
    const minOpacity = 0.6;
    const maxOpacity = 1;
    if (maxKwCount === minKwCount) return maxOpacity;
    const scale = (count - minKwCount) / (maxKwCount - minKwCount);
    return minOpacity + scale * (maxOpacity - minOpacity);
  };

  const INITIAL_COUNT = 12;
  const hasMore = keywordStats.length > INITIAL_COUNT;
  const visibleKeywords = isExpanded ? keywordStats : keywordStats.slice(0, INITIAL_COUNT);

  const handleKeywordClick = (keyword) => {
    if (onKeywordClick) {
      // Pass the ID for robust filtering, but fallback to text if parent expects it
      onKeywordClick(keyword.id);
    }
  };

  return (
    <div className="w-full bg-card rounded-2xl border border-border shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <div className="p-1.5 bg-primary/10 rounded-md">
            <Hash className="h-4 w-4 text-primary" />
          </div>
          <span>{language === 'zh' ? '热门关键词' : 'Trending Keywords'}</span>
        </div>
        {hasMore && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 text-xs px-3 text-muted-foreground hover:text-foreground rounded-full transition-colors"
          >
            {isExpanded ? (
              <><ChevronUp className="h-3.5 w-3.5 mr-1.5" /> {language === 'zh' ? '收起' : 'Show less'}</>
            ) : (
              <><ChevronDown className="h-3.5 w-3.5 mr-1.5" /> {language === 'zh' ? '展开更多' : 'Show more'}</>
            )}
          </Button>
        )}
      </div>

      <motion.div layout className="flex flex-wrap items-center gap-2.5">
        <AnimatePresence mode="popLayout">
          {visibleKeywords.map((keyword) => {
            const text = language === 'zh' ? keyword.zh : keyword.en;
            // Check if active by ID or text (to support different parent implementations)
            const isActive = activeKeywords.includes(keyword.id) || activeKeywords.includes(text);
            
            return (
              <motion.button
                layout
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={keyword.id}
                onClick={() => handleKeywordClick(keyword)}
                className={`inline-flex items-center justify-center rounded-full px-3.5 py-1.5 transition-colors ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary ring-offset-2 ring-offset-background' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent hover:border-border'
                }`}
                style={{ 
                  fontSize: getFontSize(keyword.count),
                  opacity: isActive ? 1 : getOpacity(keyword.count),
                  fontWeight: isActive ? 600 : 400 + Math.floor(((keyword.count - minKwCount) / (maxKwCount - minKwCount || 1)) * 200)
                }}
              >
                {text}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default KeywordCloud;