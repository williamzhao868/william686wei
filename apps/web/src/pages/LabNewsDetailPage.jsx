
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, ChevronLeft, ChevronRight, Tag, Building2, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackButton from '@/components/BackButton.jsx';
import { Button } from '@/components/ui/button.jsx';
import { labNewsData } from '@/data/labNewsData.js';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { toast } from 'sonner';

const categoryColors = {
  'Research Update': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  '研究更新': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Team Announcement': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  '团队公告': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Project Milestone': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  '项目里程碑': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
};

function LabNewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const currentIndex = labNewsData.findIndex(item => item.id.toString() === id);
  const rawNewsItem = labNewsData[currentIndex];

  if (!rawNewsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{language === 'zh' ? '未找到新闻' : 'News Not Found'}</h1>
            <p className="text-muted-foreground mb-8">{language === 'zh' ? '您寻找的新闻不存在或已被移除。' : 'The news item you are looking for does not exist or has been removed.'}</p>
            <Button onClick={() => navigate('/lab-news')}>
              {language === 'zh' ? '返回实验室新闻' : 'Back to Lab News'}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const newsItem = language === 'zh' && rawNewsItem.zh ? { ...rawNewsItem, ...rawNewsItem.zh } : rawNewsItem;
  
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < labNewsData.length - 1;
  
  const prevItem = hasPrev ? labNewsData[currentIndex - 1] : null;
  const nextItem = hasNext ? labNewsData[currentIndex + 1] : null;

  const formattedDate = new Date(newsItem.date).toLocaleDateString(
    language === 'zh' ? 'zh-CN' : 'en-US', 
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const hasPdf = Boolean((newsItem.pdfFileName && newsItem.pdfFileName.trim() !== '') || (newsItem.pdfUrl && newsItem.pdfUrl.trim() !== ''));
  const pdfUrl = newsItem.pdfUrl || (newsItem.pdfFileName ? `https://engma-ai-lab-1447133791.cos.ap-shanghai.myqcloud.com/reports/pdf/${newsItem.pdfFileName}` : '');

  const handleDownload = (e) => {
    e.preventDefault();
    if (!pdfUrl) {
      toast.error(language === 'zh' ? 'PDF文件不可用' : 'PDF not available');
      return;
    }
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    toast.success(language === 'zh' ? '开始下载PDF...' : 'PDF download initiated...');
  };

  return (
    <>
      <Helmet>
        <title>{`${newsItem.title} - Engma AI Lab`}</title>
        <meta name="description" content={newsItem.description.substring(0, 150) + '...'} />
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
              <BackButton returnTo="/lab-news" />

              <header className="mb-10 sm:mb-14">
                <div className="mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[newsItem.category] || 'bg-muted text-muted-foreground'}`}>
                    {newsItem.category}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance mb-6" style={{letterSpacing: '-0.02em'}}>
                  {newsItem.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground border-y border-border py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary/70" />
                    <time dateTime={newsItem.date}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary/70" />
                    <span>{newsItem.source || (language === 'zh' ? 'Engma 实验室' : 'Engma Lab')}</span>
                  </div>
                </div>
              </header>

              {newsItem.image && (
                <figure className="mb-12 rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
                  <img 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </figure>
              )}

              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed mb-16">
                <p className="text-xl text-foreground font-medium leading-relaxed mb-8">
                  {newsItem.description}
                </p>
                <p>
                  {language === 'zh' 
                    ? '随着我们在人工智能研究领域的不断深入，这一里程碑标志着我们在构建更安全、更高效的系统方面迈出了重要一步。我们的团队致力于突破现有技术的界限，同时确保我们的模型在实际应用中保持高度的可靠性和对齐性。' 
                    : 'As we continue to push the boundaries of artificial intelligence research, this milestone marks a significant step forward in building safer and more efficient systems. Our team is dedicated to advancing the state of the art while ensuring our models remain highly reliable and aligned in real-world applications.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '未来几个月，我们将分享更多关于此项目的技术细节和基准测试结果。我们期待与更广泛的开源社区和行业合作伙伴合作，共同推动这些创新的应用。'
                    : 'In the coming months, we will share more technical details and benchmark results regarding this project. We look forward to collaborating with the broader open-source community and industry partners to drive the application of these innovations.'}
                </p>
              </div>

              {hasPdf && (
                <div className="mb-12 p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">
                        {language === 'zh' ? '下载相关文档' : 'Download Document'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {newsItem.pdfFileName || (language === 'zh' ? '文档准备就绪' : 'Document ready')}
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleDownload}
                    className="rounded-full px-8 py-6 w-full sm:w-auto text-base"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    {language === 'zh' ? '下载 PDF' : 'Download PDF'}
                  </Button>
                </div>
              )}

              {newsItem.keywords && newsItem.keywords.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-6 pb-12 border-t border-border">
                  <Tag className="h-4 w-4 text-muted-foreground mr-2" />
                  {newsItem.keywords.map(kw => (
                    <span key={kw} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                      {kw}
                    </span>
                  ))}
                </div>
              )}

              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border">
                {hasPrev ? (
                  <Link 
                    to={`/lab-news/${prevItem.id}`}
                    className="flex flex-col items-start p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all group"
                  >
                    <span className="flex items-center text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      {language === 'zh' ? '上一条新闻' : 'Previous News'}
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
                    to={`/lab-news/${nextItem.id}`}
                    className="flex flex-col items-end text-right p-4 rounded-xl border border-border bg-card hover:bg-muted/50 hover:border-primary/30 transition-all group"
                  >
                    <span className="flex items-center text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                      {language === 'zh' ? '下一条新闻' : 'Next News'}
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

export default LabNewsDetailPage;
