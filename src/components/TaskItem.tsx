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
      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-cream text-[0.88rem] font-medium transition-all ${
        completed ? 'opacity-60' : available ? 'hover:bg-[#F0EFEC] cursor-pointer' : 'opacity-50 cursor-not-allowed'
      }`}
    >
      <div
        className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
          completed
            ? 'bg-emerald-500 border-emerald-500'
            : available
            ? 'border-deep-red animate-pulse-ring'
            : 'border-card-border'
        }`}
      >
        {completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
      <span>{title}</span>
      <span className={`ml-auto text-[0.72rem] font-bold whitespace-nowrap ${completed ? 'text-emerald-500' : 'text-deep-red'}`}>
        {completed ? '\u2713' : '+'} {xp} XP
      </span>
    </div>
  );

  if (completed || !available) return content;

  return <Link href={`/learn/${id}`}>{content}</Link>;
}
