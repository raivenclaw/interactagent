'use client';

import { BADGES } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BadgeGridProps {
  earnedBadges: number[];
}

export function BadgeGrid({ earnedBadges }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {BADGES.map((badge) => {
        const earned = earnedBadges.includes(badge.levelId);
        return (
          <Card
            key={badge.levelId}
            className={`text-center transition-all py-6 ${
              earned
                ? 'border-emerald-500/60 bg-emerald-50/50'
                : 'opacity-40 grayscale-[0.8]'
            }`}
          >
            <CardContent className="flex flex-col items-center gap-2">
              <div className="text-[2.5rem] leading-none">{badge.emoji}</div>
              <div className="text-[0.9rem] font-bold">{badge.name}</div>
              <Badge variant={earned ? 'secondary' : 'outline'} className="text-[0.68rem]">
                {earned ? 'Earned' : `Level ${badge.levelId}`}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
