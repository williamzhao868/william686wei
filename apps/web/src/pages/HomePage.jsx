import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, FileText, Calendar, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import ToolReportCard from '@/components/ToolReportCard.jsx';
import EventCard from '@/components/EventCard.jsx';
import { aiActivitiesData } from '@/data/aiActivitiesData.js';
import { labNewsData } from '@/data/labNewsData.js';
import { fallbackArticles } from '@/data/articlesFallbackData.js';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { formatDateISO } from '@/lib/dateFormat.js';
import pb from '@/lib/pocketbaseClient.js';
import {
  getLocalToolArticleByRecord,
  getLocalToolArticles,
  mergeWithLocalContent,
} from '@/data/localContentData.js';

const getLocalInsights = () =>
  fallbackArticles
    .filter((article) => article.type === 'A')
    .sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0))
    .slice(0, 4);

const getLocalTools = () =>
  getLocalToolArticles()
    .sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0))
    .slice(0, 4);

function HomePage() {
  const { t, language } = useLanguage();

  const localize = (item) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item);

  const latestNews = labNewsData.slice(0, 3).map(localize);
  const upcomingEvents = aiActivitiesData.slice(0, 4).map(localize);

  const [insights, setInsights] = useState([]);
  const [insightsLoading, setInsightsLoading] = useState(true);
  const [insightsError, setInsightsError] = useState(false);

  const [tools, setTools] = useState([]);
  const [toolsLoading, setToolsLoading] = useState(true);
  const [toolsError, setToolsError] = useState(false);

  const fetchInsights = async () => {
    setInsightsLoading(true);
    setInsightsError(false);
    try {
      const res = await pb.collection('articles').getList(1, 4, { 
        filter: 'type="A"', 
        sort: '-created', 
        $autoCancel: false 
      });
      const liveItems = res.items || [];
      setInsights(liveItems.length > 0 ? liveItems : getLocalInsights());
    } catch (err) {
      console.error('Failed to fetch insights:', err);
      setInsights(getLocalInsights());
    } finally {
      setInsightsLoading(false);
    }
  };

  const fetchTools = async () => {
    setToolsLoading(true);
    setToolsError(false);
    try {
      const res = await pb.collection('articles').getList(1, 50, {
        filter: 'type="C"',
        sort: '-date,-created',
        $autoCancel: false
      });
      const liveItems = res.items || [];
      const localItems = getLocalToolArticles();
      const mergedLiveItems = liveItems.map((item) => {
        const localItem = getLocalToolArticleByRecord(item);
        return localItem ? mergeWithLocalContent(item, localItem) : item;
      });
      const localIds = new Set(mergedLiveItems.map((item) => item.id));
      const localTitles = new Set(mergedLiveItems.map((item) => String(item.title || '').trim()));
      const mergedItems = [
        ...mergedLiveItems,
        ...localItems.filter((item) =>
          !localIds.has(item.id) && !localTitles.has(String(item.title || '').trim())
        ),
      ]
        .sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0))
        .slice(0, 4);

      setTools(mergedItems.length > 0 ? mergedItems : getLocalTools());
    } catch (err) {
      console.error('Failed to fetch tools:', err);
      setTools(getLocalTools());
    } finally {
      setToolsLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
    fetchTools();
  }, []);

  const renderCardSkeleton = () => (
    <div className="flex flex-col bg-card rounded-2xl overflow-hidden border border-border h-[400px]">
      <Skeleton className="h-40 w-full rounded-none" />
      <div className="p-6 flex flex-col flex-1">
        <Skeleton className="h-5 w-16 rounded-full mb-4" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-4/5 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
        <div className="mt-auto pt-4 border-t border-border/50 flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Engma AI Lab - Pioneering the Next Frontier</title>
        <meta name="description" content="Engma AI Lab is dedicated to advancing artificial intelligence through rigorous research, open innovation, and applied machine learning." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[90dvh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1703270070919-7c91aac8c335"
                alt="Abstract technological network representing AI research"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    {t('home.badge')}
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6" style={{letterSpacing: '-0.02em'}}>
                    {t('home.titlePart1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{t('home.titleHighlight')}</span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl font-light">
                    {t('home.subtitle')}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/insights">
                      <Button size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/25 group">
                        {t('home.discover')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link to="/ai-tools">
                      <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5">
                        {t('home.explore')}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Featured AI Insights Section */}
          <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.featuredInsights')}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t('home.featuredInsightsDesc')}
                  </p>
                </div>
                <Link to="/insights" className="shrink-0">
                  <Button variant="outline" className="rounded-full group">
                    {t('common.viewAllInsights') || 'View All Articles'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insightsLoading ? (
                  Array(4).fill(0).map((_, i) => <React.Fragment key={i}>{renderCardSkeleton()}</React.Fragment>)
                ) : insightsError ? (
                  <div className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-destructive/5 rounded-3xl border border-destructive/10">
                    <AlertCircle className="w-12 h-12 text-destructive/80 mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'zh' ? '无法加载洞察数据' : 'Failed to load insights'}
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      {language === 'zh' ? '获取数据时出现问题，请检查您的网络连接并重试。' : 'There was a problem fetching the data. Please check your connection and try again.'}
                    </p>
                    <Button onClick={fetchInsights} variant="outline" className="rounded-full px-8">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '重试' : 'Retry'}
                    </Button>
                  </div>
                ) : insights.length === 0 ? (
                  <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-muted/30 rounded-3xl border border-dashed border-border">
                    <FileText className="w-12 h-12 text-muted-foreground/30 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {language === 'zh' ? '暂无洞察文章' : 'No insights available'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'zh' ? '目前还没有发布任何内容。' : 'No content has been published yet.'}
                    </p>
                  </div>
                ) : (
                  insights.map((article, index) => (
                    <ArticleCard key={article.id} article={article} index={index} />
                  ))
                )}
              </div>
            </div>
          </section>

          {/* Featured AI Tools Section */}
          <section className="py-24 bg-muted/20 border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.featuredTools')}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t('home.featuredToolsDesc')}
                  </p>
                </div>
                <Link to="/ai-tools" className="shrink-0">
                  <Button variant="outline" className="rounded-full group">
                    {t('common.viewAllTools')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {toolsLoading ? (
                  Array(4).fill(0).map((_, i) => <React.Fragment key={i}>{renderCardSkeleton()}</React.Fragment>)
                ) : toolsError ? (
                  <div className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-destructive/5 rounded-3xl border border-destructive/10">
                    <AlertCircle className="w-12 h-12 text-destructive/80 mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'zh' ? '无法加载工具数据' : 'Failed to load tools'}
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      {language === 'zh' ? '获取数据时出现问题，请检查您的网络连接并重试。' : 'There was a problem fetching the data. Please check your connection and try again.'}
                    </p>
                    <Button onClick={fetchTools} variant="outline" className="rounded-full px-8">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '重试' : 'Retry'}
                    </Button>
                  </div>
                ) : tools.length === 0 ? (
                  <div className="col-span-full py-20 flex flex-col items-center justify-center text-center bg-muted/30 rounded-3xl border border-dashed border-border">
                    <FileText className="w-12 h-12 text-muted-foreground/30 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      {language === 'zh' ? '暂无推荐工具' : 'No tools available'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'zh' ? '目前还没有发布任何工具。' : 'No tools have been published yet.'}
                    </p>
                  </div>
                ) : (
                  tools.map((tool, index) => (
                    <ToolReportCard key={tool.id} report={tool} index={index} />
                  ))
                )}
              </div>
            </div>
          </section>

          {/* Latest Lab News Section */}
          <section className="py-24 bg-background border-y border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.latestNews')}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t('home.latestNewsDesc')}
                  </p>
                </div>
                <Link to="/lab-news" className="shrink-0">
                  <Button variant="outline" className="rounded-full group">
                    {t('common.viewAllNews')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {latestNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-primary">{news.category}</span>
                      <span>•</span>
                      <time dateTime={news.date}>{formatDateISO(news.date)}</time>
                    </div>
                    <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {news.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming AI Activities Section */}
          <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.upcomingEvents')}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t('home.upcomingEventsDesc')}
                  </p>
                </div>
                <Link to="/ai-activities" className="shrink-0">
                  <Button variant="outline" className="rounded-full group">
                    {t('common.viewAllActivities')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} t={t} />
                ))}
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
