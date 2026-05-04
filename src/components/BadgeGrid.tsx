'use client';

import { BADGES } from '@/lib/data';

interface BadgeGridProps {
  earnedBadges: number[];
}

export function BadgeGrid({ earnedBadges }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {BADGES.map((badge) => {
        const earned = earnedBadges.includes(badge.levelId);
        return (
          <div
            key={badge.levelId}
            className={`bg-white rounded-[18px] border-2 p-6 text-center transition-all ${
              earned ? 'border-emerald-500 bg-emerald-50' : 'border-card-border opacity-40 grayscale-[0.8]'
            }`}
          >
            <div className="text-[2.5rem] mb-2">{badge.emoji}</div>
            <div className="text-[0.9rem] font-bold mb-1">{badge.name}</div>
            <div className="text-[0.72rem] text-muted font-medium">
              {earned ? 'Earned' : `Complete Level ${badge.levelId} to unlock`}
            </div>
          </div>
        );
      })}
    </div>
  );
}
