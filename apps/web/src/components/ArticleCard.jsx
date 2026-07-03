
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText, ChevronRight, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { hasPdfAsset, resolvePdfFilename, resolvePdfUrl } from '@/lib/pdfUtils.js';

const IMAGE_CATEGORIES = {
  AI_TECH: [
    'https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5',
    'https://images.unsplash.com/photo-1684369585053-2b35888b3ae8',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    'https://images.unsplash.com/photo-1684369176170-463e84248b70',
    'https://images.unsplash.com/photo-1695144244472-a4543101ef35'
  ],
  BUSINESS_COMP: [
    'https://images.unsplash.com/photo-1521051426148-4946df2795d4',
    'https://images.unsplash.com/photo-1682514149196-e75fe2d1b899',
    'https://images.unsplash.com/photo-1674027392838-d85710a5121d',
    'https://images.unsplash.com/photo-1632259784757-851e895e2426',
    'https://images.unsplash.com/photo-1649478680984-01586ce84ac0'
  ],
  TRENDS_GROWTH: [
    'https://images.unsplash.com/photo-1682514149196-e75fe2d1b899',
    'https://images.unsplash.com/photo-1581182394437-2a9876866966',
    'https://images.unsplash.com/photo-1657100941036-29a23baa25a2',
    'https://images.unsplash.com/photo-1610101336108-566c585c0913',
    'https://images.unsplash.com/photo-1617723008297-5419847d59f0'
  ],
  DATA_ANALYTICS: [
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d',
    'https://images.unsplash.com/photo-1686061592689-312bbfb5c055',
    'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0'
  ],
  DIGITAL_INNOV: [
    'https://images.unsplash.com/photo-1692976001563-41fa7497d81d',
    'https://images.unsplash.com/photo-1677695959861-5b875fd70a21'
  ]
};

const KEYWORDS = {
  AI_TECH: ['ai', 'machine learning', 'neural', 'algorithm', 'deep learning', 'automation', 'intelligent', '模型', '智能', '算法', '大语言', 'gpt', 'openai', 'anthropic', 'claude', '芯片', 'chip'],
  BUSINESS_COMP: ['competitor', 'market', 'strategy', 'business', 'competitive', '收购', '竞争', '市场', '商业', '企业', '公司', 'broadcom', 'qualcomm'],
  TRENDS_GROWTH: ['trend', 'growth', 'innovation', 'future', 'emerging', 'evolution', '趋势', '增长', '创新', '未来', '发展', '生态'],
  DATA_ANALYTICS: ['data', 'analytics', 'insight', 'metric', 'analysis', '数据', '分析', '洞察', '指标', '报告'],
  DIGITAL_INNOV: ['digital', 'tech', 'platform', 'cloud', '数字化', '技术', '平台', '云', '软件', '工作流', 'workflow']
};

const ALL_UNIQUE_IMAGES = [...new Set(Object.values(IMAGE_CATEGORIES).flat())];

function getArticleImage(article, index = 0) {
  if (article.featured_image) {
    return pb.files.getURL(article, article.featured_image);
  }
  
  const title = (article.title || '').toLowerCase();
  let matchedCategory = IMAGE_CATEGORIES.DIGITAL_INNOV; 
  
  for (const [category, keywords] of Object.entries(KEYWORDS)) {
    if (keywords.some(keyword => title.includes(keyword))) {
      matchedCategory = IMAGE_CATEGORIES[category];
      break;
    }
  }
  
  const combinedPool = [...new Set([...matchedCategory, ...ALL_UNIQUE_IMAGES])];
  return combinedPool[index % combinedPool.length];
}

function ArticleCard({ article, index = 0 }) {
  const { language } = useLanguage();
  const [imgError, setImgError] = useState(false);
  
  const formattedDate = new Date(article.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const imageUrl = getArticleImage(article, index);
  const hasPdf = hasPdfAsset(article);
  const pdfHref = resolvePdfUrl(article);
  const pdfFilename = resolvePdfFilename(article, 'insight.pdf');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col bg-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="block shrink-0 relative bg-muted h-40">
          <Link to={`/article/${article.id}`} className="absolute inset-0 block overflow-hidden">
            {!imgError ? (
              <img 
                src={imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/20 transition-colors duration-300">
                <FileText className="w-12 h-12 text-primary/20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
        
        <div className="flex flex-col flex-1 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {article.category && (
              <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                {article.category}
              </Badge>
            )}
          </div>

          <Link to={`/article/${article.id}`} className="block mb-3 group/link">
            <h3 className="text-xl font-semibold leading-snug group-hover/link:text-primary transition-colors duration-200 line-clamp-2">
              {article.title}
            </h3>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1 line-clamp-3">
            {article.summary}
          </p>

          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
            
            <div className="flex items-center gap-4">
              {hasPdf && (
                <a
                  href={pdfHref}
                  download={pdfFilename}
                  className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Download className="h-3.5 w-3.5 mr-1" />
                  {language === 'zh' ? '下载 PDF' : 'Download PDF'}
                </a>
              )}
              <Link 
                to={`/article/${article.id}`} 
                className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors"
              >
                {language === 'zh' ? '阅读更多' : 'Read More'}
                <ChevronRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ArticleCard;
