'use client';

import { StreakInfo } from '@/lib/types';

interface StreakPopupProps {
  info: StreakInfo | null;
  onClose: () => void;
}

export function StreakPopup({ info, onClose }: StreakPopupProps) {
  if (!info) return null;

  let icon: string;
  let title: string;
  let text: string;

  if (info.type === 'continue') {
    icon = '\u{1F525}';
    title = `Day ${info.streak}! Keep it going!`;
    text = `You're on a ${info.streak}-day streak. Complete one task to keep the fire alive.`;
  } else if (info.type === 'broken') {
    icon = '\u{1F4AA}';
    title = 'Start fresh — Day 1!';
    text = `Your streak was ${info.oldStreak} days. No worries — every expert was once a beginner. Let's go again.`;
  } else {
    icon = '\u{1F3C6}';
    title = `${info.streak}-Day Streak!`;
    text = `Incredible! You've been learning for ${info.streak} days straight. You're in the top 1% of learners.`;
  }

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-charcoal/50 backdrop-blur-sm p-6">
      <div className="bg-white rounded-3xl p-10 text-center max-w-[360px] w-full animate-scale-in">
        <div className="text-[3.5rem] mb-3">{icon}</div>
        <div className="text-[1.3rem] font-extrabold mb-2">{title}</div>
        <div className="text-[0.9rem] text-muted mb-6 leading-relaxed">{text}</div>
        <button
          onClick={onClose}
          className="bg-deep-red text-white text-base font-bold py-4 px-12 rounded-[14px] shadow-[0_4px_14px_rgba(139,26,16,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all w-full"
        >
          Let&apos;s Go!
        </button>
      </div>
    </div>
  );
}
