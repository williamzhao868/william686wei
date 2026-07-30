
import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, Activity } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';
import LabTimeline from '@/components/LabTimeline.jsx';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

const teamMembers = [
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
  },
  {
    id: 8,
    name: '张雨蕾',
    avatarUrl: '/team-members/zhangyulei.png'
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
    date: '2026-07-19',
    description: '团队成员参加 WAIC 2026',
    summary: '围绕前沿 AI 应用、企业落地、Agent 工作流、具身智能和 AI 基础设施方向进行现场学习与行业观察。',
    image: '/lab-news/waic_2026_01.jpg',
    newsId: 'lab-news-20260719-waic'
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
  const { t } = useLanguage();

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
