
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const LabTimeline = ({ events }) => {
  return (
    <div className="relative border-l-2 border-muted pl-8 md:pl-12 ml-4 md:ml-6 space-y-12">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300" />
          
          {/* Event Content */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
            <div className="flex items-center text-sm font-medium text-primary mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              <time dateTime={event.date}>{event.date}</time>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              {event.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LabTimeline;
