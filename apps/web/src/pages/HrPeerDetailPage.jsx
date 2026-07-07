import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, ChevronLeft, ChevronRight, Tag, Building2, AlertCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackButton from '@/components/BackButton.jsx';
import { Button } from '@/components/ui/button.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { hrPeerArticles, getHrPeerArticleById, hrPeerKeywordDefinitions } from '@/data/hrPeersData.js';

const impactColors = {
  High: 'bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400',
  Medium: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400',
  Low: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400'
};

export default function HrPeerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const rawItem = getHrPeerArticleById(id);

  if (!rawItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{language === 'zh' ? '未找到内容' : 'Content Not Found'}</h1>
            <p className="text-muted-foreground mb-8">
              {language === 'zh' ? '您寻找的美日人力资源同行内容不存在。' : 'The HR peer entry you are looking for does not exist.'}
            </p>
            <Button onClick={() => navigate('/hr-peers')} className="transition-all duration-200 active:scale-[0.98]">
              {language === 'zh' ? '返回' : 'Back'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const item = language === 'zh' && rawItem.zh ? { ...rawItem, ...rawItem.zh } : rawItem;
  const currentIndex = hrPeerArticles.findIndex((entry) => entry.id === id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < hrPeerArticles.length - 1;
  const prevItem = hasPrev ? hrPeerArticles[currentIndex - 1] : null;
  const nextItem = hasNext ? hrPeerArticles[currentIndex + 1] : null;

  const formattedDate = new Date(item.date).toLocaleDateString(
    language === 'zh' ? 'zh-CN' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const impactLabel = language === 'zh'
    ? (item.impactLevel === 'High' ? '高影响' : item.impactLevel === 'Medium' ? '中影响' : '低影响')
    : `${item.impactLevel} Impact`;
  const keywordMap = Object.fromEntries(hrPeerKeywordDefinitions.map((keyword) => [keyword.id, keyword]));

  return (
    <>
      <Helmet>
        <title>{`${item.title} - Engma AI Lab`}</title>
        <meta name="description" content={item.summary} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background">
          <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BackButton returnTo="/hr-peers" />

              <header className="mb-10 sm:mb-14">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {item.category && item.category.map((cat) => (
                    <span key={cat} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border bg-primary/10 text-primary border-primary/20">
                      {cat}
                    </span>
                  ))}
                  {item.impactLevel && (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${impactColors[item.impactLevel] || 'bg-muted text-muted-foreground'}`}>
                      <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                      {impactLabel}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance mb-6" style={{ letterSpacing: '-0.02em' }}>
                  {item.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground border-y border-border py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary/70" />
                    <time dateTime={item.date}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary/70" />
                    <div className="flex gap-2 flex-wrap">
                      {item.companies && item.companies.map((company, idx) => (
                        <span key={idx} className="font-medium text-foreground">
                          {language === 'zh' ? company.zh : company.en}
                          {idx < item.companies.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {item.websiteUrl && (
                  <div className="mt-5">
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {language === 'zh' ? '官方来源' : 'Official source'}
                    </a>
                  </div>
                )}
              </header>

              {item.imageUrl && (
                <figure className="mb-12 rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </figure>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-16">
                <p className="text-xl text-foreground font-medium leading-relaxed mb-8">
                  {item.summary}
                </p>
                <div className="space-y-6">
                  {item.fullContent
                    ? item.fullContent.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    : <p>{item.summary}</p>}
                </div>
              </div>

              {item.keywords && item.keywords.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-6 pb-12 border-t border-border">
                  <Tag className="h-4 w-4 text-muted-foreground mr-2" />
                  {item.keywords.map((kw) => {
                    const keyword = keywordMap[kw];
                    const label = language === 'zh' ? (keyword?.zh || kw) : (keyword?.en || kw);
                    return (
                      <span key={kw} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                        {label}
                      </span>
                    );
                  })}
                </div>
              )}

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border">
                {hasPrev ? (
                  <Link
                    to={`/hr-peers/${prevItem.id}`}
                    className="flex flex-col items-start p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 active:scale-[0.98] group"
                  >
                    <span className="flex items-center text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      {language === 'zh' ? '上一条内容' : 'Previous Update'}
                    </span>
                    <span className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {language === 'zh' && prevItem.zh ? prevItem.zh.title : prevItem.title}
                    </span>
                  </Link>
                ) : (
                  <div className="p-4 rounded-xl border border-transparent"></div>
                )}

                {hasNext ? (
                  <Link
                    to={`/hr-peers/${nextItem.id}`}
                    className="flex flex-col items-end text-right p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 active:scale-[0.98] group"
                  >
                    <span className="flex items-center text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                      {language === 'zh' ? '下一条内容' : 'Next Update'}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                    <span className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {language === 'zh' && nextItem.zh ? nextItem.zh.title : nextItem.title}
                    </span>
                  </Link>
                ) : (
                  <div className="p-4 rounded-xl border border-transparent"></div>
                )}
              </nav>
            </motion.div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
