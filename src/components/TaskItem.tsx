'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface TaskItemProps {
  id: string;
  title: string;
  xp: number;
  completed: boolean;
  available: boolean;
}

export function TaskItem({ id, title, xp, completed, available }: TaskItemProps) {
  const content = (
    <div
      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[0.88rem] font-medium transition-all ${
        completed
          ? 'bg-muted/50 opacity-60'
          : available
          ? 'bg-secondary hover:bg-accent cursor-pointer'
          : 'bg-muted/30 opacity-50 cursor-not-allowed'
      }`}
    >
      <div
        className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : available
            ? 'border-primary animate-pulse-ring'
            : 'border-border'
        }`}
      >
        {completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <span className="leading-tight">{title}</span>
      <Badge
        variant={completed ? 'secondary' : 'outline'}
        className={`ml-auto text-[0.68rem] font-bold whitespace-nowrap ${
          completed ? 'text-emerald-600' : 'text-primary'
        }`}
      >
        {completed ? (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="mr-0.5">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          '+'
        )}
        {xp} XP
      </Badge>
    </div>
  );

  if (completed || !available) return content;

  return <Link href={`/learn/${id}`}>{content}</Link>;
}
