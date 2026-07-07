import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Search, ChevronLeft, ChevronRight, FileX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { chinaCompetitorNewsData } from '@/data/competitorNewsData.js';
import ArticleCard from '@/components/ArticleCard.jsx';
import KeywordCloud from '@/components/KeywordCloud.jsx';
import ActiveFilters from '@/components/ActiveFilters.jsx';
import CompanyFilter from '@/components/CompanyFilter.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

const HR_COMPANIES = new Set([
  'Workday', 'ADP', 'Oracle', 'SAP', 'UKG', 'Paychex', 'BambooHR', 'Rippling', 'Gusto', 'Deel',
  'Greenhouse', 'Lever', 'LinkedIn', 'ZipRecruiter', 'ManpowerGroup', 'Recruit', 'Persol', 'World Intec', 'Mynavi',
  'Beisen', 'Moka', '51job', 'Zhaopin', 'Xinrenxinshi', 'Dayi', 'Kangaroo'
]);

const localize = (item, language) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item);

function HrPeersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeKeywords, setActiveKeywords] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [activeCompanies, setActiveCompanies] = useState([]);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const itemsPerPage = 7;

  const pageTitle = language === 'zh' ? '美日人力资源同行' : 'US & Japan HR Peers';
  const pageDesc = language === 'zh'
    ? '聚焦美国和日本的人力资源科技公司，跟踪产品升级、融资并购、战略变化与行业趋势。'
    : 'Track product launches, financing, strategy shifts, and industry trends across US and Japan HR technology peers.';

  const localizedData = useMemo(() => {
    return chinaCompetitorNewsData
      .map((item) => localize(item, language))
      .filter((item) => (item.companies || []).some((company) => HR_COMPANIES.has(company.en)))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [language]);

  const keywordsData = useMemo(() => {
    const kwMap = {};

    chinaCompetitorNewsData.forEach(item => {
      if (!(item.companies || []).some((company) => HR_COMPANIES.has(company.en))) return;
      const itemKeywordsEn = item.keywords || [];
      const itemKeywordsZh = item.zh?.keywords || [];

      itemKeywordsEn.forEach((kw, i) => {
        const zhKw = itemKeywordsZh[i] || kw;
        if (!kwMap[kw]) {
          kwMap[kw] = { id: kw, text: kw, zhText: zhKw, count: 0 };
        }
        kwMap[kw].count += 1;
      });
    });

    return Object.values(kwMap).sort((a, b) => b.count - a.count).slice(0, 15);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeKeywords, activeTags, activeCompanies]);

  const handleKeywordClick = (keyword) => {
    setActiveKeywords(prev => prev.includes(keyword) ? prev.filter(k => k !== keyword) : [...prev, keyword]);
  };

  const handleTagClick = (tag) => {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleCompanyClick = (companyEn) => {
    setActiveCompanies(prev => prev.includes(companyEn) ? prev.filter(c => c !== companyEn) : [...prev, companyEn]);
  };

  const handleClearFilters = () => {
    setActiveKeywords([]);
    setActiveTags([]);
    setActiveCompanies([]);
    setSearchQuery('');
  };

  const filteredArticles = localizedData.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchLower) ||
      article.summary.toLowerCase().includes(searchLower);

    const matchesKeywords = activeKeywords.length === 0 ||
      (article.keywords && activeKeywords.some(k => article.keywords.includes(k)));

    const combinedTags = [...(article.tags || []), ...(article.category || [])];
    const matchesTags = activeTags.length === 0 ||
      activeTags.some(t => combinedTags.includes(t));

    const originalArticle = chinaCompetitorNewsData.find(a => a.id === article.id);
    const matchesCompanies = activeCompanies.length === 0 ||
      (originalArticle?.companies && activeCompanies.some(c => originalArticle.companies.some(ac => ac.en === c)));

    return matchesSearch && matchesKeywords && matchesTags && matchesCompanies;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{pageTitle} - Engma AI Lab</title>
        <meta name="description" content={pageDesc} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-12 bg-muted/20 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mb-8"
              >
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  {language === 'zh' ? '美日 HR 同行' : 'US & Japan HR Peers'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{letterSpacing: '-0.02em'}}>
                  {pageTitle}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {pageDesc}
                </p>
              </motion.div>

              <div className="filter-section-container">
                <div className="relative w-full mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={language === 'zh' ? '搜索文章...' : 'Search articles...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-11 pr-4 rounded-xl border border-border bg-background text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground shadow-sm"
                  />
                </div>

                <KeywordCloud
                  keywords={keywordsData}
                  activeKeywords={activeKeywords}
                  onKeywordClick={handleKeywordClick}
                />

                <CompanyFilter
                  selectedCompanies={activeCompanies}
                  onCompanyToggle={handleCompanyClick}
                  allArticles={localizedData}
                />
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

              <ActiveFilters
                activeKeywords={activeKeywords}
                activeTags={activeTags}
                activeCompanies={activeCompanies}
                onRemoveKeyword={handleKeywordClick}
                onRemoveTag={handleTagClick}
                onRemoveCompany={handleCompanyClick}
                onClearAll={handleClearFilters}
                resultCount={filteredArticles.length}
              />

              <AnimatePresence mode="wait">
                {paginatedArticles.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
                  >
                    {paginatedArticles.map((article, index) => (
                      <div
                        key={article.id}
                        onClick={() => navigate(`/competitor/${article.id}`)}
                        className="cursor-pointer group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            navigate(`/competitor/${article.id}`);
                          }
                        }}
                      >
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-300 z-10"></div>
                        <ArticleCard article={article} index={index} />
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-24 text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <FileX className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{language === 'zh' ? '未找到相关文章' : 'No matching articles found'}</h3>
                    <p className="text-muted-foreground max-w-sm">
                      {language === 'zh' ? '尝试调整搜索词或筛选条件来找到你要的内容。' : 'Try adjusting your search terms or filters to find the content you need.'}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={handleClearFilters}
                    >
                      {language === 'zh' ? '清除筛选' : 'Clear Filters'}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-12">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {t('common.previous')}
                  </Button>

                  <span className="text-sm font-medium text-muted-foreground">
                    {t('common.page')} {currentPage} {t('common.pageOf')} {totalPages} {t('common.pageEnd')}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full"
                  >
                    {t('common.next')}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HrPeersPage;
