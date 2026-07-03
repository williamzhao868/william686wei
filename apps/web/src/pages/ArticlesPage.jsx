import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Search, ChevronLeft, ChevronRight, FileX } from 'lucide-react';
import { articlesData } from '@/data/articlesData.js';
import ArticleCard from '@/components/ArticleCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { t, language } = useLanguage();
  const itemsPerPage = 8;

  const localize = (item) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item);
  const localizedData = articlesData.map(localize);

  const allCategories = ['All', ...new Set(localizedData.flatMap(article => article.category))];

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const filteredArticles = localizedData.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category.includes(selectedCategory);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      article.title.toLowerCase().includes(searchLower) || 
      article.content.toLowerCase().includes(searchLower) ||
      article.summary.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Helmet>
        <title>{t('articles.title')} - Engma AI Lab</title>
        <meta name="description" content={t('articles.desc')} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-16 bg-muted/20 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mb-8"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{letterSpacing: '-0.02em'}}>
                  {t('articles.title')}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('articles.desc')}
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full sm:w-auto overflow-x-auto">
                  <TabsList className="inline-flex h-auto flex-wrap gap-2 bg-transparent p-0">
                    {allCategories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:bg-muted/80"
                      >
                        {category === 'All' ? t('common.all') : category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <div className="relative w-full sm:w-72 shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t('common.searchArticles')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-9 pr-4 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground">
                  {t('common.showing')} {paginatedArticles.length > 0 ? startIndex + 1 : 0} {t('common.to')} {Math.min(startIndex + itemsPerPage, filteredArticles.length)} {t('common.of')} {filteredArticles.length} {t('common.publications')}
                </p>
              </div>

              {paginatedArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedArticles.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <FileX className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('articles.noResults')}</h3>
                  <p className="text-muted-foreground max-w-sm">
                    {t('articles.noResultsDesc')}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-full"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                  >
                    {t('common.clearFilters')}
                  </Button>
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-16">
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
                    {t('common.page')} {currentPage} {t('common.of')} {totalPages}
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

export default ArticlesPage;