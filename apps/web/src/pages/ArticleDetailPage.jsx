
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Share2, AlertCircle, FileText, ChevronRight, Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackButton from '@/components/BackButton.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { motion } from 'framer-motion';
import pb from '@/lib/pocketbaseClient.js';
import { fallbackArticles } from '@/data/articlesFallbackData.js';
import {
  getLocalInsightArticleByRecord,
  getLocalInsightById,
  markdownToHtml,
  mergeWithLocalContent,
} from '@/data/localContentData.js';
import { downloadPdfRecord, hasPdfAsset, resolvePdfFilename } from '@/lib/pdfUtils.js';
import { toast } from 'sonner';

const getLocalArticleById = (id) =>
  fallbackArticles.find((article) => article.type === 'A' && article.id === id) ||
  getLocalInsightById(id) ||
  null;

function getInsightPdfRecord(article) {
  const date = String(article?.date || article?.created || '').slice(0, 10);
  const match = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return article;

  const [, year, month, day] = match;
  const pdfFileName = `Engma_A_AI_Insight_Daily_${month}${day}${year}.pdf`;

  return {
    ...article,
    pdfFileName,
    pdfUrl: `/reports/pdf/${pdfFileName}`,
  };
}

export default function ArticleDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    setLoading(true);
    try {
      const record = await pb.collection('articles').getOne(id, {
        filter: 'type="A"',
        $autoCancel: false
      });
      const localContent = getLocalInsightArticleByRecord(record) || getLocalArticleById(id);
      const mergedRecord = mergeWithLocalContent(record, localContent);
      setArticle(mergedRecord);

      if (mergedRecord.category) {
        const related = await pb.collection('articles').getList(1, 3, {
          filter: `id != "${id}" && type="A" && category = "${mergedRecord.category}"`,
          sort: '-date,-created',
          $autoCancel: false
        });
        setRelatedArticles(related.items || []);
      }
    } catch (err) {
      console.error('Error fetching article:', err);
      const localArticle = getLocalArticleById(id);
      if (localArticle) {
        const localContent = getLocalInsightArticleByRecord(localArticle) || localArticle;
        setArticle(mergeWithLocalContent(localArticle, localContent));
        const related = fallbackArticles
          .filter((item) => item.type === 'A' && item.id !== id && item.category === localArticle.category)
          .sort((a, b) => new Date(b.date || b.created || 0) - new Date(a.date || a.created || 0))
          .slice(0, 3);
        setRelatedArticles(related);
      } else if (err.status !== 404) {
        toast.error(language === 'zh' ? '加载文章失败' : 'Failed to load article');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pb-24">
          <div className="bg-muted/20 pt-16 pb-16 border-b border-border mb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <Skeleton className="h-8 w-24 mb-8" />
              <Skeleton className="h-6 w-32 rounded-full mb-6" />
              <Skeleton className="h-16 w-full mb-8" />
              <Skeleton className="h-24 w-full mb-8" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Skeleton className="h-96 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-24 text-center max-w-lg">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold mb-4">{language === 'zh' ? '未找到文章' : 'Article Not Found'}</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            {language === 'zh' ? '您正在寻找的文章不存在或已被删除。' : 'The article you are looking for does not exist or has been removed.'}
          </p>
          <Button onClick={() => navigate('/insights')} variant="default" className="rounded-full px-8 transition-all duration-200 active:scale-[0.98]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回文章列表' : 'Go Back to Articles'}
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = article.date ? new Date(article.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  }) : '';

  const pdfRecord = getInsightPdfRecord(article);
  const hasPdf = hasPdfAsset(pdfRecord);
  const pdfFilename = resolvePdfFilename(pdfRecord, 'article.pdf');

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!hasPdf) {
      toast.error(language === 'zh' ? 'PDF文件不可用' : 'PDF not available');
      return;
    }

    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      await downloadPdfRecord(pdfRecord, { fallbackName: pdfFilename });

      toast.success(language === 'zh' ? '开始下载PDF...' : 'PDF download initiated...');
    } catch (err) {
      console.error('Download error:', err);
      toast.error(language === 'zh' ? '下载PDF失败。请重试。' : 'Failed to download PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{`${article.title} - Engma AI Lab`}</title>
        <meta name="description" content={article.summary || article.description || `Read about ${article.title}`} />
      </Helmet>

      <Header />

      <main className="flex-1 pb-24">
        <div className="bg-muted/20 pt-16 pb-16 border-b border-border mb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <BackButton returnTo="/insights" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-8 text-balance" style={{letterSpacing: '-0.02em'}}>
                {article.title}
              </h1>

              {article.summary && (
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-prose text-balance">
                  {article.summary}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border/50 pt-6">
                {formattedDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/60" />
                    <time dateTime={article.date}>{formattedDate}</time>
                  </div>
                )}
                {article.author && (
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{article.author}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {article.contentMarkdown ? (
              <div 
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-a:text-primary hover:prose-a:text-primary/80 transition-colors"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(article.contentMarkdown || '') }}
              />
            ) : article.content && article.content.trim() !== 'Full report available in PDF.' ? (
              <div 
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-a:text-primary hover:prose-a:text-primary/80 transition-colors
                  prose-img:rounded-2xl prose-img:border prose-img:border-border prose-img:shadow-sm"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : null}

            <div className="mt-12 p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">
                    {language === 'zh' ? '下载完整报告' : 'Download Full Report'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {hasPdf 
                      ? (pdfFilename || (language === 'zh' ? '文档准备就绪' : 'Document ready'))
                      : (language === 'zh' ? '暂无可用 PDF' : 'PDF not available')}
                  </p>
                </div>
              </div>
              <Button 
                onClick={hasPdf ? handleDownload : undefined}
                disabled={!hasPdf || isDownloading}
                variant={hasPdf ? "default" : "secondary"}
                className="rounded-full px-8 py-6 w-full sm:w-auto text-base"
              >
                {isDownloading ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Download className="w-5 h-5 mr-2" />
                )}
                {language === 'zh' ? '下载 PDF' : 'Download PDF'}
              </Button>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <Button variant="outline" onClick={() => navigate('/insights')} className="rounded-full transition-all duration-200 active:scale-[0.98]">
                <ArrowLeft className="w-4 h-4 mr-2" /> {language === 'zh' ? '返回列表' : 'Back to List'}
              </Button>
              <Button variant="ghost" onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: article.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }} className="rounded-full transition-all duration-200 active:scale-[0.98]">
                <Share2 className="w-4 h-4 mr-2" /> {language === 'zh' ? '分享' : 'Share'}
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      {relatedArticles.length > 0 && (
        <aside className="bg-muted/30 border-t border-border py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h3 className="text-2xl font-bold mb-8 text-center sm:text-left">
              {language === 'zh' ? '相关文章' : 'Related Articles'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <Link 
                  key={relArticle.id} 
                  to={`/article/${relArticle.id}`}
                  className="group flex flex-col bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(relArticle.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US')}</span>
                  </div>
                  <h4 className="text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {relArticle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
                    {relArticle.summary}
                  </p>
                  <div className="mt-6 flex items-center text-primary text-sm font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {language === 'zh' ? '阅读文章' : 'Read Article'} <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      <Footer />
    </div>
  );
}
