
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search, Globe } from 'lucide-react';
import { aiActivitiesData } from '@/data/aiActivitiesData.js';
import EventCard from '@/components/EventCard.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext.jsx';

function AIActivitiesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, language } = useLanguage();

  const localize = (item) => (language === 'zh' && item.zh ? { ...item, ...item.zh } : item);
  const localizedData = aiActivitiesData
    .map(localize)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const eventTypes = ['All', ...new Set(localizedData.map(event => event.eventType))];

  const filteredEvents = localizedData.filter(event => {
    const matchesType = selectedType === 'All' || event.eventType === selectedType;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      event.name.toLowerCase().includes(searchLower) || 
      event.location.toLowerCase().includes(searchLower);
    
    return matchesType && matchesSearch;
  });

  const visibleEvents = filteredEvents.slice(0, 10);

  return (
    <>
      <Helmet>
        <title>{t('activities.title')} - Engma AI Lab</title>
        <meta name="description" content={t('activities.desc')} />
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
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  <Globe className="h-4 w-4 mr-2" /> {t('activities.globalBadge')}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{letterSpacing: '-0.02em'}}>
                  {t('activities.title')}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('activities.desc')}
                </p>
              </motion.div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <Tabs value={selectedType} onValueChange={setSelectedType} className="w-full md:w-auto overflow-x-auto">
                  <TabsList className="inline-flex h-auto flex-wrap gap-2 bg-transparent p-0">
                    {eventTypes.map((type) => (
                      <TabsTrigger
                        key={type}
                        value={type}
                        className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:bg-muted/80"
                      >
                        {type === 'All' ? t('common.all') : type}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <div className="relative w-full md:w-80 shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder={t('common.searchEvents')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-9 pr-4 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-6 flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span>{t('common.showing')} {Math.min(filteredEvents.length, 10)} {t('common.events')}</span>
              </div>

              {visibleEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {visibleEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="py-20 text-center border border-dashed border-border rounded-2xl bg-muted/10">
                  <p className="text-muted-foreground text-lg mb-2">{t('activities.noResults')}</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setSelectedType('All');}}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {t('common.clearFilters')}
                  </button>
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

export default AIActivitiesPage;
