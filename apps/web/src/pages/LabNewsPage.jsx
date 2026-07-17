
import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight, Users, Activity } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';
import LabTimeline from '@/components/LabTimeline.jsx';
import { motion } from 'framer-motion';
import { labNewsData } from '@/data/labNewsData.js';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { formatDateISO } from '@/lib/dateFormat.js';

const categoryColors = {
  'Research Update': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  '研究更新': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Team Announcement': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  '团队公告': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Project Milestone': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  '项目里程碑': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
};

const teamMembers = [
  {
    id: 8,
    name: '张雨蕾',
    avatarUrl: '/team-members/zhangyulei.png'
  },
  {
    id: 1,
    name: '刘肖鲁',
    avatarUrl: 'https://horizons-cdn.hostinger.com/b28ea7ca-961f-4e44-8fef-0dda445d1017/bd673b1b1bd0563e8163b7af18e83da5.png'
  },
  {
    id: 2,
    name: '秦君佩',
    avatarUrl: 'https://horizons-cdn.hostinger.com/b28ea7ca-961f-4e44-8fef-0dda445d1017/c55503aad578327d862f26658685f4f2.png'
  },
  {
    id: 3,
    name: '赵伟东',
    avatarUrl: 'https://horizons-cdn.hostinger.com/b28ea7ca-961f-4e44-8fef-0dda445d1017/e6437dc8079e04f280c57c54e4800517.png'
  },
  {
    id: 4,
    name: '闫菁',
    avatarUrl: '/team-members/jianqing.png'
  },
  {
    id: 5,
    name: '张舒翎',
    avatarUrl: '/team-members/zhangshuling.png'
  },
  {
    id: 6,
    name: '黄瑞风',
    avatarUrl: '/team-members/huangruifeng.png'
  },
  {
    id: 7,
    name: '伍斌',
    avatarUrl: '/team-members/wubin.png'
  }
];

const timelineEvents = [
  {
    date: '2026-01-01',
    description: '中央研究院成立'
  },
  {
    date: '2026-07-16',
    description: '张雨蕾加入团队'
  },
  {
    date: '2026-06-01',
    description: '赵伟东加入团队'
  }
];

const sortedTimelineEvents = [...timelineEvents].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

function LabNewsPage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const localize = (item) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item);
  const localizedNews = labNewsData.map(localize);

  return (
    <>
      <Helmet>
        <title>{t('news.title')} - Engma AI Lab</title>
        <meta name="description" content={t('news.desc')} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 bg-muted/20 border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{letterSpacing: '-0.02em'}}>
                  {t('news.title')}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('news.desc')}
                </p>
              </motion.div>
            </div>
          </section>

          {/* News Section (Only renders if there are news items) */}
          {localizedNews.length > 0 && (
            <section className="py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="relative border-l-2 border-muted pl-8 md:pl-12 ml-4 md:ml-6 space-y-16">
                  {localizedNews.map((news, index) => {
                    const formattedDate = formatDateISO(news.date);

                    return (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative group"
                      >
                        <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300" />

                        <div 
                          role="button"
                          tabIndex={0}
                          onClick={() => navigate(`/lab-news/${news.id}`)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              navigate(`/lab-news/${news.id}`);
                            }
                          }}
                          className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[news.category] || 'bg-muted text-muted-foreground'}`}>
                              {news.category}
                            </span>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1.5" />
                              <time dateTime={news.date}>{formattedDate}</time>
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                            {news.title}
                          </h3>

                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col">
                              <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                                {news.description}
                              </p>
                              <div className="mt-auto flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                {t('news.readFull')}
                                <ArrowRight className="h-4 w-4 ml-1.5" />
                              </div>
                            </div>
                            
                            {news.image && (
                              <div className="shrink-0 w-full md:w-64 h-40 rounded-xl overflow-hidden bg-muted group-hover:shadow-md transition-shadow">
                                <img 
                                  src={news.image} 
                                  alt={news.title} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Lab Dynamics Timeline Section */}
          <section className="py-20 border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 flex items-center gap-3"
              >
                <Activity className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">{t('news.timelineTitle')}</h2>
              </motion.div>

              <LabTimeline events={sortedTimelineEvents} />
            </div>
          </section>

          {/* Team Members Section */}
          <section className="py-20 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12 flex items-center gap-3"
              >
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">{t('news.teamMembers')}</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TeamMemberCard
                      name={member.name}
                      avatarUrl={member.avatarUrl}
                    />
                  </motion.div>
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

export default LabNewsPage;
