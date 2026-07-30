
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { formatDateISO } from '@/lib/dateFormat.js';

const LabTimeline = ({ events }) => {
  const navigate = useNavigate();

  return (
    <div className="relative border-l-2 border-muted pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
      {events.map((event, index) => {
        const isClickable = Boolean(event.newsId);

        const openEvent = () => {
          if (isClickable) {
            navigate(`/lab-news/${event.newsId}`);
          }
        };

        return (
          <motion.div
            key={`${event.date}-${event.description}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300" />

            <div
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onClick={openEvent}
              onKeyDown={(e) => {
                if (!isClickable) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openEvent();
                }
              }}
              className={`bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1 ${
                isClickable ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2' : ''
              }`}
            >
              <div className="flex items-center text-sm font-medium text-primary mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={event.date}>{formatDateISO(event.date)}</time>
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed font-medium">
                    {event.description}
                  </p>
                  {event.summary && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {event.summary}
                    </p>
                  )}
                  {isClickable && (
                    <div className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      查看详情
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </div>
                  )}
                </div>
                {event.image && (
                  <div className="shrink-0 w-full md:w-56 h-36 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={event.image}
                      alt={event.description}
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
  );
};

export default LabTimeline;
