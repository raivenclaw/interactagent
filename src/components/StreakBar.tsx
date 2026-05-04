'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface StreakBarProps {
  streak: number;
  xp: number;
  avatarLabel?: string;
  onAvatarClick?: () => void;
  showBackButton?: boolean;
}

export function StreakBar({ streak, xp, avatarLabel = 'D', onAvatarClick, showBackButton }: StreakBarProps) {
  return (
    <div className="sticky top-0 z-[100] bg-background border-b border-border px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <span className="font-mono text-foreground">{streak}</span>
          <span>day streak</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
          <span className="font-mono text-primary">{xp}</span>
          <span>XP</span>
        </div>
      </div>
      {showBackButton ? (
        <Link href="/learn">
          <Button variant="outline" size="icon" className="rounded-md w-8 h-8">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 2L4 7L9 12" />
            </svg>
          </Button>
        </Link>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={onAvatarClick}
          className="rounded-md w-8 h-8 text-xs font-medium"
        >
          {avatarLabel}
        </Button>
      )}
    </div>
  );
}
