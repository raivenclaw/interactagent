'use client';

import { StreakInfo } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface StreakPopupProps {
  info: StreakInfo | null;
  onClose: () => void;
}

export function StreakPopup({ info, onClose }: StreakPopupProps) {
  if (!info) return null;

  let icon: React.ReactNode;
  let title: string;
  let text: string;

  if (info.type === 'continue') {
    icon = (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-amber-500">
        <path d="M12 2C12 2 14 5.5 14 8c0 1.1 1.1 1.7 1.7 1.1C16.8 10.5 18 12.5 16 16c-1.5 2.5-4.5 2.5-6 0-2-3.5-1-5.5 0-7.5.5 1 1.5.5 1.5-.5C11.5 5.5 12 2 12 2z" fill="currentColor"/>
      </svg>
    );
    title = `Day ${info.streak}! Keep it going!`;
    text = `You're on a ${info.streak}-day streak. Complete one task to keep the fire alive.`;
  } else if (info.type === 'broken') {
    icon = (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" fill="currentColor" opacity="0.2"/>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 22V15" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );
    title = 'Start fresh — Day 1!';
    text = `Your streak was ${info.oldStreak} days. No worries — every expert was once a beginner. Let's go again.`;
  } else {
    icon = (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-amber-500">
        <path d="M12 2L15 8.5H22L16.5 12.5L18.5 19L12 15L5.5 19L7.5 12.5L2 8.5H9L12 2Z" fill="currentColor"/>
      </svg>
    );
    title = `${info.streak}-Day Streak!`;
    text = `Incredible! You've been learning for ${info.streak} days straight. You're in the top 1% of learners.`;
  }

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent showCloseButton={false} className="text-center max-w-[360px] p-10 rounded-2xl">
        <DialogHeader className="items-center">
          <div className="mb-2">{icon}</div>
          <DialogTitle className="text-[1.3rem] font-extrabold">{title}</DialogTitle>
          <DialogDescription className="text-[0.9rem] leading-relaxed">{text}</DialogDescription>
        </DialogHeader>
        <Button
          onClick={onClose}
          className="w-full h-14 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-[0_4px_14px_rgba(139,26,16,0.3)] hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 transition-all"
        >
          Let&apos;s Go!
        </Button>
      </DialogContent>
    </Dialog>
  );
}
