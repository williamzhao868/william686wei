import React from 'react';
import { X, Building2, Hash, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const getCompanyDisplayName = (companyEn, language) => {
  const companyMap = {
    'Google': '谷歌', 'Microsoft': '微软', 'OpenAI': 'OpenAI', 'Apple': '苹果', 
    'Amazon': '亚马逊', 'Meta': 'Meta', 'Tesla': '特斯拉', 'NVIDIA': '英伟达', 'Anthropic': 'Anthropic',
    'Alibaba': '阿里', 'Tencent': '腾讯', 'ByteDance': '字节', 'Baidu': '百度', 
    'JD.com': '京东', 'Huawei': '华为', 'Meituan': '美团', 'Didi': '滴滴', 'Xiaomi': '小米',
    'Beisen': '北森', 'Dayi': '大易', 'Xinrenxinshi': '薪人薪事', 'Moka': 'Moka', 
    'Kangaroo': '袋鼠', 'Zhaopin': '智联招聘', '51job': '前程无忧',
    'Workday': 'Workday', 'ADP': 'ADP', 'Oracle': 'Oracle', 'SAP': 'SAP', 'UKG': 'UKG',
    'Paychex': 'Paychex', 'BambooHR': 'BambooHR', 'Rippling': 'Rippling', 'Gusto': 'Gusto',
    'Deel': 'Deel', 'Greenhouse': 'Greenhouse', 'Lever': 'Lever', 'LinkedIn': 'LinkedIn',
    'ZipRecruiter': 'ZipRecruiter', 'ManpowerGroup': 'ManpowerGroup', 'Recruit': 'Recruit',
    'Persol': 'Persol', 'World Intec': 'World Intec', 'Mynavi': 'Mynavi' 
  };
  return language === 'zh' ? (companyMap[companyEn] || companyEn) : companyEn;
};

const getKeywordDisplayName = (keyword, language) => {
  if (language !== 'zh') return keyword;
  const keywordMap = {
    agents: '智能体',
    'enterprise-ai': '企业 AI',
    'foundation-models': '基础模型',
    coding: 'AI 编程',
    productivity: '生产力',
    automation: '自动化',
    multimodal: '多模态',
    robotics: '机器人',
    hrtech: '人力资源科技',
    cloud: '云与算力',
    'open-source': '开源生态',
    security: 'AI 安全',
    research: 'AI 研究',
    investment: '投融资',
    data: '数据与 RAG',
  };
  return keywordMap[keyword] || keyword;
};

function ActiveFilters({ activeKeywords = [], activeTags = [], activeCompanies = [], onRemoveKeyword, onRemoveTag, onRemoveCompany, onClearAll, resultCount }) {
  const { t, language } = useLanguage();
  
  if (activeKeywords.length === 0 && activeTags.length === 0 && activeCompanies.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 p-3 bg-muted/30 border border-border rounded-xl shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2 flex-1">
        <span className="text-xs font-semibold text-muted-foreground mr-1 uppercase tracking-wider">
          {language === 'zh' ? '已选筛选' : 'Active Filters'}
        </span>
        
        <AnimatePresence>
          {activeCompanies.map(company => (
            <motion.div
              key={`comp-${company}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Badge 
                variant="outline" 
                className="pl-1.5 pr-1 py-0.5 text-xs flex items-center gap-1 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
              >
                <Building2 className="h-3 w-3 opacity-70" />
                <span>{getCompanyDisplayName(company, language)}</span>
                <button 
                  onClick={() => onRemoveCompany(company)}
                  className="p-0.5 rounded-full hover:bg-primary/20 transition-colors ml-0.5"
                  aria-label={`Remove ${company} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}

          {activeKeywords.map(keyword => (
            <motion.div
              key={`kw-${keyword}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Badge variant="secondary" className="pl-1.5 pr-1 py-0.5 text-xs flex items-center gap-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <Hash className="h-3 w-3 opacity-70" />
                {getKeywordDisplayName(keyword, language)}
                <button 
                  onClick={() => onRemoveKeyword(keyword)}
                  className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ml-0.5"
                  aria-label={`Remove ${keyword} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}
          
          {activeTags.map(tag => (
            <motion.div
              key={`tag-${tag}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Badge variant="outline" className="pl-1.5 pr-1 py-0.5 text-xs flex items-center gap-1 border-border bg-background hover:bg-muted transition-colors">
                <Tag className="h-3 w-3 opacity-70" />
                {tag}
                <button 
                  onClick={() => onRemoveTag(tag)}
                  className="p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ml-0.5"
                  aria-label={`Remove ${tag} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 sm:border-l border-border/50 pt-2 sm:pt-0 sm:pl-3">
        <span className="text-xs font-medium text-muted-foreground">
          {resultCount} {t('common.results')}
        </span>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearAll}
          className="h-7 text-xs text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors px-2"
        >
          {t('common.clearFilters')}
        </Button>
      </div>
    </motion.div>
  );
}

export default ActiveFilters;
