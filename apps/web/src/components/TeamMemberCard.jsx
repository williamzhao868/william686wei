
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberCard = ({ name, avatarUrl }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border/40 group">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
        {avatarUrl && (
          <div className="w-[132px] h-[132px] rounded-full overflow-hidden bg-muted/20 shadow-sm">
            <img 
              src={avatarUrl} 
              alt={`Avatar of ${name}`} 
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
