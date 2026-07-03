
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, ExternalLink, Share2, AlertCircle, Bot, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Skeleton } from '@/components/ui/skeleton.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BackButton from '@/components/BackButton.jsx';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { motion } from 'framer-motion';
import pb from '@/lib/pocketbaseClient.js';
import { fallbackArticles } from '@/data/articlesFallbackData.js';
import { getLocalToolByRecord, markdownToHtml, mergeWithLocalContent } from '@/data/localContentData.js';
import { toast } from 'sonner';

export default function AIToolDetailPage() {
  const { toolId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchTool();
  }, [toolId]);

  const fetchTool = async () => {
    setLoading(true);
    try {
      const record = await pb.collection('articles').getOne(toolId, {
        filter: 'type="C"',
        $autoCancel: false
      });
      const localTool = getLocalToolByRecord(record) || fallbackArticles.find((article) => article.type === 'C' && article.id === toolId) || null;
      setTool(mergeWithLocalContent(record, localTool));
    } catch (err) {
      console.error('Error fetching tool:', err);
      const localTool = fallbackArticles.find((article) => article.type === 'C' && article.id === toolId) || null;
      if (localTool) {
        const localContent = getLocalToolByRecord(localTool) || localTool;
        setTool(mergeWithLocalContent(localTool, localContent));
      } else {
        toast.error(language === 'zh' ? '加载工具详情失败' : 'Failed to load tool details');
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
              <div className="flex items-start gap-5 mb-8">
                <Skeleton className="h-16 w-16 rounded-2xl" />
                <div className="flex-1">
                  <Skeleton className="h-12 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Skeleton className="h-64 w-full" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-24 text-center max-w-lg">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold mb-4">{language === 'zh' ? '未找到工具' : 'Tool Not Found'}</h1>
          <p className="text-muted-foreground mb-8 text-lg">
            {language === 'zh' ? '您正在寻找的工具评估不存在或已被删除。' : 'The tool evaluation you are looking for does not exist or has been removed.'}
          </p>
          <Button onClick={() => navigate('/ai-tools')} variant="default" className="rounded-full px-8 transition-all duration-200 active:scale-[0.98]">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'zh' ? '返回工具列表' : 'Go Back to Tools'}
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = tool.date ? new Date(tool.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', { 
    year: 'numeric', month: 'long', day: 'numeric' 
  }) : '';

  const hasPdf = Boolean((tool.pdfFileName && tool.pdfFileName.trim() !== '') || (tool.pdfUrl && tool.pdfUrl.trim() !== ''));
  const pdfUrl = tool.pdfUrl || (tool.pdfFileName ? `https://engma-ai-lab-1447133791.cos.ap-shanghai.myqcloud.com/reports/pdf/${tool.pdfFileName}` : '');

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
        <title>{`${tool.toolName || tool.title} - Engma AI Lab`}</title>
        <meta name="description" content={tool.summary || tool.description || 'Tool Details'} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 pb-24">
          <div className="bg-muted/20 pt-16 pb-16 border-b border-border mb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <BackButton returnTo="/ai-tools" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                      <Bot className="h-8 w-8" />
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground mb-3 text-balance">
                        {tool.toolName || tool.title}
                      </h1>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {formattedDate && (
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {formattedDate}
                          </span>
                        )}
                        {tool.websiteUrl && (
                          <a 
                            href={tool.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-primary hover:underline font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {language === 'zh' ? '访问网站' : 'Visit Website'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {tool.score && (
                    <div className="flex flex-col items-center justify-center bg-card border border-border rounded-2xl p-4 min-w-[120px] shadow-sm">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        {language === 'zh' ? '推荐评分' : 'Score'}
                      </span>
                      <div className="flex items-center text-3xl font-bold text-primary">
                        {tool.score}
                        <span className="text-lg text-muted-foreground ml-1">/10</span>
                      </div>
                    </div>
                  )}
                </div>

                {tool.summary && (
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-prose">
                    {tool.summary}
                  </p>
                )}
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="pt-8 border-t border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {language === 'zh' ? '详细评测' : 'Detailed Review'}
                </h2>
                {tool.contentMarkdown ? (
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none 
                      prose-headings:font-bold prose-headings:tracking-tight
                      prose-a:text-primary hover:prose-a:text-primary/80 transition-colors"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(tool.contentMarkdown || '') }}
                  />
                ) : tool.content && tool.content.trim() !== 'Full benchmark report available in PDF.' && !tool.content.includes('暂无完整评测内容') ? (
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none 
                      prose-headings:font-bold prose-headings:tracking-tight
                      prose-a:text-primary hover:prose-a:text-primary/80 transition-colors"
                    dangerouslySetInnerHTML={{ __html: tool.content }}
                  />
                ) : (
                  <p className="text-lg leading-relaxed text-muted-foreground italic">
                    {language === 'zh' ? '暂无完整评测内容。' : 'No detailed review content available.'}
                  </p>
                )}
              </div>

              {hasPdf ? (
                <div className="mt-12 p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">
                        {language === 'zh' ? '下载评测报告' : 'Download Benchmark Report'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {tool.pdfFileName || (language === 'zh' ? '文档准备就绪' : 'Document ready')}
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
              ) : (
                <div className="mt-12 p-8 bg-card border border-border rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">
                        {language === 'zh' ? '下载评测报告' : 'Download Benchmark Report'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'zh' ? '报告正在准备中' : 'Report is being prepared'}
                      </p>
                    </div>
                  </div>
                  
                  <Button 
                    variant="secondary"
                    disabled
                    className="rounded-full px-8 py-6 w-full sm:w-auto text-base opacity-70 cursor-not-allowed"
                  >
                    {language === 'zh' ? 'PDF 即将推出' : 'PDF Coming Soon'}
                  </Button>
                </div>
              )}

              <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                <Button variant="outline" onClick={() => navigate('/ai-tools')} className="rounded-full transition-all duration-200 active:scale-[0.98]">
                  <ArrowLeft className="w-4 h-4 mr-2" /> {language === 'zh' ? '返回列表' : 'Back to List'}
                </Button>
                <Button variant="ghost" onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: tool.toolName || tool.title, url: window.location.href });
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

        <Footer />
      </div>
    </>
  );
}
