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

  let title: string;
  let text: string;

  if (info.type === 'continue') {
    title = `Day ${info.streak}`;
    text = `You're on a ${info.streak}-day streak. Complete one task to keep going.`;
  } else if (info.type === 'broken') {
    title = 'Day 1 — Fresh start';
    text = `Your previous streak was ${info.oldStreak} days. Let's go again.`;
  } else {
    title = `${info.streak}-day streak`;
    text = `You've been learning for ${info.streak} days straight.`;
  }

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent showCloseButton={false} className="text-center max-w-[360px] p-10 rounded-md">
        <DialogHeader className="items-center">
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed text-muted-foreground">{text}</DialogDescription>
        </DialogHeader>
        <Button
          onClick={onClose}
          className="w-full h-12 text-sm font-semibold rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
}
