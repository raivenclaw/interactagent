'use client';

import Link from 'next/link';

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
      className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors border-l-[3px] ${
        completed
          ? 'border-l-transparent text-muted-foreground'
          : available
          ? 'border-l-primary bg-transparent hover:bg-muted/50 cursor-pointer'
          : 'border-l-transparent text-muted-foreground/50 cursor-not-allowed'
      }`}
    >
      {/* Checkbox indicator */}
      <div
        className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 ${
          completed
            ? 'bg-foreground border-foreground'
            : available
            ? 'border-primary'
            : 'border-border'
        }`}
      >
        {completed && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <span className="leading-tight">{title}</span>
      <span className="ml-auto text-xs font-mono text-muted-foreground">
        +{xp}
      </span>
    </div>
  );

  if (completed || !available) return content;

  return <Link href={`/learn/${id}`}>{content}</Link>;
}
