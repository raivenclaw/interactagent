'use client';

import Link from 'next/link';

interface StreakBarProps {
  streak: number;
  xp: number;
  avatarLabel?: string;
  onAvatarClick?: () => void;
  showBackButton?: boolean;
}

export function StreakBar({ streak, xp, avatarLabel = 'D', onAvatarClick, showBackButton }: StreakBarProps) {
  return (
    <div className="sticky top-0 z-[100] bg-cream border-b border-card-border px-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 font-bold text-[0.9rem] text-amber-500">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C8 0 9.5 3 9.5 5.5C9.5 6.5 10.5 7 11 6C12 8 13 10 11 13C9.5 15.5 6.5 15.5 5 13C3 10 4 8 5 6C5.5 7 6.5 6.5 6.5 5.5C6.5 3 8 0 8 0Z" />
          </svg>
          Day {streak}
        </div>
        <div className="flex items-center gap-1 font-bold text-[0.9rem] text-deep-red">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 0L8.5 4H13L9.5 6.5L11 11L7 8.5L3 11L4.5 6.5L1 4H5.5L7 0Z" />
          </svg>
          {xp} XP
        </div>
      </div>
      {showBackButton ? (
        <Link
          href="/learn"
          className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm hover:scale-105 transition-transform"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 2L4 7L9 12" />
          </svg>
        </Link>
      ) : (
        <button
          onClick={onAvatarClick}
          className="w-9 h-9 rounded-full bg-deep-red text-white flex items-center justify-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer"
        >
          {avatarLabel}
        </button>
      )}
    </div>
  );
}
