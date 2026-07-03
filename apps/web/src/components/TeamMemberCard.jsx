
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamMemberCard = ({ name, avatarUrl }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group">
      <CardContent className="p-8 flex flex-col items-center text-center space-y-5">
        {avatarUrl && (
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-muted shadow-sm group-hover:border-primary/20 transition-colors">
            <img 
              src={avatarUrl} 
              alt={`Avatar of ${name}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        )}
        <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
