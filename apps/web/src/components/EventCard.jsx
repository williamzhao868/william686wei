import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';
import { motion } from 'framer-motion';

function EventCard({ event, index = 0 }) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const eventUrl = event.websiteUrl || event.registrationLink || '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-card rounded-2xl p-6 border border-border flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4 gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-transparent">
            {event.eventType}
          </Badge>
          <div className="flex items-center text-sm font-medium text-muted-foreground shrink-0 bg-muted px-2 py-1 rounded-md">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            {formattedDate}
          </div>
        </div>

        <h3 className="text-xl font-bold leading-tight mb-3">
          {event.name}
        </h3>

        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1.5 shrink-0" />
          <span className="truncate">{event.location}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
          {event.description}
        </p>

        <Button variant="outline" className="w-full mt-auto group" asChild>
          <a href={eventUrl} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

export default EventCard;
