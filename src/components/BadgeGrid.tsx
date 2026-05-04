'use client';

import { BADGES } from '@/lib/data';

interface BadgeGridProps {
  earnedBadges: number[];
}

export function BadgeGrid({ earnedBadges }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
      {BADGES.map((badge) => {
        const earned = earnedBadges.includes(badge.levelId);
        return (
          <div
            key={badge.levelId}
            className={`border border-border rounded-md p-4 text-center transition-colors ${
              earned ? 'border-foreground/20' : 'opacity-30'
            }`}
          >
            <div className="text-2xl leading-none mb-2">{badge.emoji}</div>
            <div className="text-xs font-semibold">{badge.name}</div>
            <div className="text-[0.65rem] text-muted-foreground mt-1">
              {earned ? 'Earned' : `Level ${badge.levelId}`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
