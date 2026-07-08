import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils.js';
import { Button } from '@/components/ui/button.jsx';

function CompanyFilter({ selectedCompanies = [], onCompanyToggle, allArticles = [], specialGroups: specialGroupsOverride = null }) {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultSpecialGroups = [
    {
      key: 'seven-little-dragons',
      label: language === 'zh' ? '七小龙' : 'Seven Dragons',
      companies: ['OpenAI', 'Anthropic', 'Google', 'Microsoft', 'Meta', 'NVIDIA', 'Apple']
    },
    {
      key: 'us-jp-hr',
      label: language === 'zh' ? '美日人力资源同行' : 'US & Japan HR Peers',
      companies: ['Workday', 'ADP', 'ZipRecruiter', 'Greenhouse', 'ManpowerGroup', 'Recruit Holdings', 'PERSOL Holdings']
    }
  ];

  const specialGroups = specialGroupsOverride || defaultSpecialGroups;

  // Parse all articles to extract unique companies and their frequencies
  const companyStats = useMemo(() => {
    const map = {};
    
    allArticles.forEach(article => {
      if (article.companies && Array.isArray(article.companies)) {
        article.companies.forEach(comp => {
          if (!map[comp.en]) {
            map[comp.en] = { 
              en: comp.en, 
              zh: comp.zh || comp.en, 
              count: 0 
            };
          }
          map[comp.en].count++;
        });
      }
    });

    return Object.values(map).sort((a, b) => b.count - a.count);
  }, [allArticles]);

  if (companyStats.length === 0) return null;

  const getCompanyByName = (name) => companyStats.find((company) => company.en === name);
  const specialCompanyNames = new Set(specialGroups.flatMap((group) => group.companies));
  const groupedSpecials = specialGroups
    .map((group) => ({
      ...group,
      items: group.companies.map(getCompanyByName).filter(Boolean),
    }))
    .filter((group) => group.items.length > 0);
  const remainingCompanies = companyStats.filter((company) => !specialCompanyNames.has(company.en));

  const INITIAL_COUNT = 8;
  const hasMore = remainingCompanies.length > INITIAL_COUNT;
  const visibleCompanies = isExpanded ? remainingCompanies : remainingCompanies.slice(0, INITIAL_COUNT);

  const renderCompanyChip = (company) => {
    const isSelected = selectedCompanies.includes(company.en);
    const displayName = language === 'zh' ? company.zh : company.en;
    const articlesText = language === 'zh' ? '篇' : 'articles';

    return (
      <motion.button
        layout
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -10 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        key={company.en}
        onClick={() => onCompanyToggle(company.en)}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm transition-all duration-200 border",
          isSelected 
            ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary ring-offset-2 ring-offset-background border-transparent font-medium" 
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-transparent hover:border-border font-normal"
        )}
      >
        <span>{displayName}</span>
        <span className="ml-1.5 text-xs opacity-80">({company.count} {articlesText})</span>
      </motion.button>
    );
  };

  return (
    <div className="w-full bg-card rounded-2xl border border-border shadow-sm p-5 mt-4 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <div className="p-1.5 bg-primary/10 rounded-md">
            <Building2 className="h-4 w-4 text-primary" />
          </div>
          <span>{language === 'zh' ? '相关公司' : 'Related Companies'}</span>
        </div>
      </div>

      {groupedSpecials.map((group) => (
        <div key={group.key} className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {group.label}
            </div>
            <div className="text-xs text-muted-foreground">
              {group.items.length} {language === 'zh' ? '项' : 'items'}
            </div>
          </div>
          <motion.div layout className="flex flex-wrap items-center gap-2.5">
            <AnimatePresence mode="popLayout">
              {group.items.map(renderCompanyChip)}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}

      {remainingCompanies.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {language === 'zh' ? '其他公司' : 'Other Companies'}
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
                  <><ChevronDown className="h-3.5 w-3.5 mr-1.5" /> {language === 'zh' ? '展开所有' : 'Show all'}</>
                )}
              </Button>
            )}
          </div>

          <motion.div layout className="flex flex-wrap items-center gap-2.5">
            <AnimatePresence mode="popLayout">
              {visibleCompanies.map(renderCompanyChip)}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
}
export default CompanyFilter;
