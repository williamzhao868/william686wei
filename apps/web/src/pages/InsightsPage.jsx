
import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Search, ChevronLeft, ChevronRight, FileX, RefreshCw } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ActiveFilters from '@/components/ActiveFilters.jsx';
import KeywordCloud from '@/components/KeywordCloud.jsx';
import CompanyFilter from '@/components/CompanyFilter.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import pb from '@/lib/pocketbaseClient.js';
import { fallbackArticles } from '@/data/articlesFallbackData.js';
import {
  getLocalInsightArticleByRecord,
  getLocalInsightArticles,
  mergeWithLocalContent,
} from '@/data/localContentData.js';
import { buildKeywordCloudData, enrichContentForFilters } from '@/data/contentFilterUtils.js';

const getLocalInsights = () => {
  const byTitle = new Map();

  for (const article of fallbackArticles.filter((item) => item.type === 'A')) {
    const localArticle = getLocalInsightArticleByRecord(article);
    const merged = mergeWithLocalContent(article, localArticle);
    byTitle.set(String(merged.title || '').trim(), merged);
  }

  for (const article of getLocalInsightArticles()) {
    const title = String(article.title || '').trim();
    if (!byTitle.has(title)) byTitle.set(title, article);
  }

  return [...byTitle.values()]
    .sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0));
};

function InsightsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeKeywords, setActiveKeywords] = useState([]);
  const [activeCompanies, setActiveCompanies] = useState([]);
  const { language } = useLanguage();
  const itemsPerPage = 12;

  const pageTitle = language === 'zh' ? '研究洞察' : 'Research Insights';
  const pageDesc = language === 'zh'
    ? '探索我们最新的研究成果、行业分析和技术洞察。'
    : 'Explore our latest research findings, industry analysis, and technical insights.';

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);
    try {
      const records = await pb.collection('articles').getList(1, 50, {
        sort: '-date,-created',
        filter: 'type="A"',
        $autoCancel: false
      });
      const localItems = getLocalInsights();
      const localByTitle = new Map(localItems.map((item) => [String(item.title || '').trim(), item]));
      const mergedLiveItems = (records.items || []).map((item) =>
        mergeWithLocalContent(
          item,
          getLocalInsightArticleByRecord(item) || localByTitle.get(String(item.title || '').trim())
        )
      );
      const liveTitles = new Set(mergedLiveItems.map((item) => String(item.title || '').trim()));
      const mergedItems = [
        ...mergedLiveItems,
        ...localItems.filter((item) => !liveTitles.has(String(item.title || '').trim())),
      ].sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0));

      setArticles(mergedItems);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setArticles(getLocalInsights());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [language]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategories, activeKeywords, activeCompanies]);

  const filterableArticles = useMemo(
    () => articles.map(enrichContentForFilters),
    [articles]
  );
  const keywordsData = useMemo(
    () => buildKeywordCloudData(filterableArticles),
    [filterableArticles]
  );

  const toggleKeyword = (keyword) => {
    setActiveKeywords((prev) => prev.includes(keyword) ? prev.filter((item) => item !== keyword) : [...prev, keyword]);
  };

  const toggleCompany = (company) => {
    setActiveCompanies((prev) => prev.includes(company) ? prev.filter((item) => item !== company) : [...prev, company]);
  };

  const toggleCategory = (cat) => {
    setActiveCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleClearFilters = () => {
    setActiveCategories([]);
    setActiveKeywords([]);
    setActiveCompanies([]);
    setSearchQuery('');
  };

  const categories = [...new Set(articles.map(a => a.category).filter(Boolean))];

  const filteredArticles = filterableArticles.filter(article => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      (article.title && article.title.toLowerCase().includes(searchLower)) ||
      (article.content && article.content.toLowerCase().includes(searchLower)) ||
      (article.summary && article.summary.toLowerCase().includes(searchLower));
    
    const matchesCategory = activeCategories.length === 0 || activeCategories.includes(article.category);
    const matchesKeyword = activeKeywords.length === 0 || activeKeywords.some((keyword) => article.filterKeywords.includes(keyword));
    const matchesCompany = activeCompanies.length === 0 || activeCompanies.some((company) => article.companies.some((item) => item.en === company));

    return matchesSearch && matchesCategory && matchesKeyword && matchesCompany;
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

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <section className="py-16 md:py-24 bg-muted/20 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mb-12"
              >
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  Research & Insights
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{letterSpacing: '-0.02em'}}>
                  {pageTitle}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
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
                {!loading && <KeywordCloud keywords={keywordsData} activeKeywords={activeKeywords} onKeywordClick={toggleKeyword} />}
                {!loading && <CompanyFilter selectedCompanies={activeCompanies} onCompanyToggle={toggleCompany} allArticles={filterableArticles} />}
              </div>
              
              {categories.length > 0 && !loading && (
                <div className="flex flex-wrap gap-2 mt-6">
                  <Button
                    variant={activeCategories.length === 0 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategories([])}
                    className="rounded-full h-8"
                  >
                    {language === 'zh' ? '全部' : 'All'}
                  </Button>
                  {categories.map(cat => (
                    <Button
                      key={cat}
                      variant={activeCategories.includes(cat) ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => toggleCategory(cat)}
                      className="rounded-full h-8"
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              
              <ActiveFilters 
                activeTags={activeCategories}
                activeKeywords={activeKeywords}
                activeCompanies={activeCompanies}
                onRemoveTag={toggleCategory}
                onRemoveKeyword={toggleKeyword}
                onRemoveCompany={toggleCompany}
                onClearAll={handleClearFilters}
                resultCount={filteredArticles.length}
              />

              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex flex-col bg-card rounded-2xl overflow-hidden border border-border h-full">
                      <Skeleton className="h-40 w-full" />
                      <div className="p-6 flex flex-col flex-1">
                        <Skeleton className="h-4 w-20 mb-3" />
                        <Skeleton className="h-6 w-full mb-3" />
                        <Skeleton className="h-16 w-full mb-6" />
                        <div className="mt-auto pt-4 border-t border-border/50">
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border rounded-3xl bg-destructive/5">
                  <RefreshCw className="h-12 w-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-destructive">{error}</h3>
                  <Button variant="outline" onClick={fetchArticles} className="mt-4">
                    {language === 'zh' ? '重试' : 'Try Again'}
                  </Button>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  {paginatedArticles.length > 0 ? (
                    <motion.div 
                      key="results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                      {paginatedArticles.map((article, index) => (
                        <ArticleCard 
                          key={article.id} 
                          article={article} 
                          index={index} 
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="no-results"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border rounded-3xl bg-muted/10"
                    >
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
                        <FileX className="h-10 w-10 text-muted-foreground" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">
                        {language === 'zh' ? '未找到相关文章' : 'No articles found'}
                      </h3>
                      <p className="text-muted-foreground max-w-sm mb-8 text-lg">
                        {language === 'zh' 
                          ? '尝试调整搜索词或分类来找到您要找的内容。' 
                          : 'Try adjusting your search terms or categories to find what you are looking for.'}
                      </p>
                      {searchQuery || activeCategories.length > 0 || activeKeywords.length > 0 || activeCompanies.length > 0 ? (
                        <Button 
                          variant="default" 
                          className="rounded-full px-8"
                          onClick={handleClearFilters}
                        >
                          {language === 'zh' ? '清除筛选' : 'Clear Filters'}
                        </Button>
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {!loading && !error && totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-16">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="rounded-full px-6"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    {language === 'zh' ? '上一页' : 'Previous'}
                  </Button>
                  
                  <span className="text-sm font-medium text-muted-foreground mx-4">
                    {currentPage} / {totalPages}
                  </span>

                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="rounded-full px-6"
                  >
                    {language === 'zh' ? '下一页' : 'Next'}
                    <ChevronRight className="h-4 w-4 ml-2" />
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

export default InsightsPage;
