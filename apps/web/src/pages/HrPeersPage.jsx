import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, ChevronLeft, ChevronRight, FileX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import KeywordCloud from '@/components/KeywordCloud.jsx';
import ActiveFilters from '@/components/ActiveFilters.jsx';
import CompanyFilter from '@/components/CompanyFilter.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { hrPeerArticles, hrPeerKeywordDefinitions } from '@/data/hrPeersData.js';

function HrPeersPage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeKeywords, setActiveKeywords] = useState([]);
  const [activeTags, setActiveTags] = useState([]);
  const [activeCompanies, setActiveCompanies] = useState([]);
  const itemsPerPage = 7;
  const specialGroups = useMemo(() => ([
    {
      key: 'western-track',
      label: language === 'zh' ? '欧美赛道' : 'Western Markets',
      companies: ['Workday', 'ADP', 'ZipRecruiter', 'Greenhouse', 'ManpowerGroup', 'LinkedIn', 'Deel']
    },
    {
      key: 'apac-track',
      label: language === 'zh' ? '亚太赛道' : 'APAC Track',
      companies: ['Recruit Holdings', 'PERSOL Holdings', 'World Intec']
    }
  ]), [language]);

  const localizedData = useMemo(() => {
    return hrPeerArticles
      .map((item) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [language]);

  const keywordsData = useMemo(() => {
    const keywordMap = new Map(
      hrPeerKeywordDefinitions.map((keyword) => [keyword.id, { ...keyword, count: 0 }])
    );

    localizedData.forEach((item) => {
      (item.keywords || []).forEach((keywordId) => {
        const existing = keywordMap.get(keywordId);
        if (existing) existing.count += 1;
      });
    });

    return Array.from(keywordMap.values())
      .filter((keyword) => keyword.count > 0)
      .sort((a, b) => b.count - a.count);
  }, [localizedData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeKeywords, activeTags, activeCompanies]);

  const handleKeywordClick = (keyword) => {
    setActiveKeywords((prev) => prev.includes(keyword) ? prev.filter((item) => item !== keyword) : [...prev, keyword]);
  };

  const handleTagClick = (tag) => {
    setActiveTags((prev) => prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]);
  };

  const handleCompanyClick = (company) => {
    setActiveCompanies((prev) => prev.includes(company) ? prev.filter((item) => item !== company) : [...prev, company]);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveKeywords([]);
    setActiveTags([]);
    setActiveCompanies([]);
  };

  const filteredArticles = localizedData.filter((article) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchLower) ||
      article.summary.toLowerCase().includes(searchLower) ||
      (article.fullContent || '').toLowerCase().includes(searchLower);

    const matchesKeywords =
      activeKeywords.length === 0 || activeKeywords.some((keyword) => (article.keywords || []).includes(keyword));

    const combinedTags = [...(article.tags || []), ...(article.category || [])];
    const matchesTags =
      activeTags.length === 0 || activeTags.some((tag) => combinedTags.includes(tag));

    const matchesCompanies =
      activeCompanies.length === 0 ||
      (article.companies || []).some((company) => activeCompanies.includes(company.en));

    return matchesSearch && matchesKeywords && matchesTags && matchesCompanies;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{language === 'zh' ? '全球HR Tech竞品监测 - Engma AI Lab' : 'Global HR Tech Monitor - Engma AI Lab'}</title>
        <meta
          name="description"
          content={language === 'zh'
            ? '聚焦全球人力资源科技竞品，跟踪真实官方动态、产品升级、招聘创新与市场变化。'
            : 'Track real official updates from global HR tech companies across hiring, workforce, and AI transformation.'}
        />
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
                  {language === 'zh' ? '全球 HR Tech' : 'Global HR Tech'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ letterSpacing: '-0.02em' }}>
                  {language === 'zh' ? '全球HR Tech竞品监测' : 'Global HR Tech Monitor'}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'zh'
                    ? '聚焦全球人力资源科技竞品，只保留真实官方内容，帮助你快速看懂同行在做什么。'
                    : 'A focused view of real official updates from global HR tech companies.'}
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
                  specialGroups={specialGroups}
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
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {paginatedArticles.map((article, index) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        index={index}
                        detailPath={`/hr-peers/${article.id}`}
                      />
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
                    <h3 className="text-xl font-semibold mb-2">
                      {language === 'zh' ? '未找到相关文章' : 'No matching articles found'}
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      {language === 'zh'
                        ? '尝试调整搜索词或筛选条件来找到你要的内容。'
                        : 'Try adjusting your search terms or filters to find the content you need.'}
                    </p>
                    <Button variant="outline" className="mt-6 rounded-full" onClick={handleClearFilters}>
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
                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {language === 'zh' ? '上一页' : 'Previous'}
                  </Button>

                  <span className="text-sm font-medium text-muted-foreground">
                    {language === 'zh' ? '第' : 'Page'} {currentPage} {language === 'zh' ? '页，共' : 'of'} {totalPages}
                  </span>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full"
                  >
                    {language === 'zh' ? '下一页' : 'Next'}
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
