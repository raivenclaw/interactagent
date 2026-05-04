'use client';

import { Level } from '@/lib/types';
import { TaskItem } from './TaskItem';

interface LevelCardProps {
  level: Level;
  status: 'completed' | 'current' | 'locked';
  completedTasks: string[];
  expanded: boolean;
  onToggle: () => void;
}

export function LevelCard({ level, status, completedTasks, expanded, onToggle }: LevelCardProps) {
  const totalTasks = level.tasks.length;
  const doneCount = level.tasks.filter((t) => completedTasks.includes(t.id)).length;
  const progress = totalTasks ? (doneCount / totalTasks) * 100 : 0;

  return (
    <div className="relative mb-8 level-node">
      {/* Dot */}
      <div
        className={`absolute -left-7 top-5 w-[26px] h-[26px] rounded-full border-[3px] border-cream flex items-center justify-center text-[0.65rem] font-extrabold text-white z-[2] transition-all ${
          status === 'completed'
            ? 'bg-emerald-500'
            : status === 'current'
            ? 'bg-deep-red animate-pulse-ring'
            : 'bg-[#D1CDC8]'
        }`}
      >
        {status === 'completed' ? '\u2713' : level.id}
      </div>

      {/* Card */}
      <div
        onClick={status !== 'locked' ? onToggle : undefined}
        className={`bg-white rounded-[18px] border-2 p-5 transition-all ${
          status === 'current'
            ? 'border-deep-red shadow-[0_4px_20px_rgba(139,26,16,0.1)] cursor-pointer'
            : status === 'completed'
            ? 'border-emerald-500 opacity-85 cursor-pointer'
            : 'border-card-border opacity-50 cursor-not-allowed'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[0.7rem] font-bold text-muted uppercase tracking-wider">Level {level.id}</span>
          <span className="text-[1.3rem]">{level.badge}</span>
        </div>
        <div className="text-[1.05rem] font-bold mb-1">{level.name}</div>
        <div className="text-[0.8rem] text-muted mb-3.5">{level.subtitle}</div>
        <div className="h-1.5 bg-[#F0EFEC] rounded-sm overflow-hidden mb-2">
          <div
            className={`h-full rounded-sm transition-[width] duration-500 ease-out ${
              status === 'completed' ? 'bg-emerald-500' : 'bg-deep-red'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[0.73rem] text-muted font-semibold">
          {doneCount}/{totalTasks} tasks complete{status === 'completed' ? ' — Badge earned!' : ''}
        </div>

        {/* Task list */}
        {expanded && status !== 'locked' && (
          <div className="mt-3.5 flex flex-col gap-2">
            {level.tasks.map((task, idx) => {
              const done = completedTasks.includes(task.id);
              const prevDone = level.tasks.slice(0, idx).every((pt) => completedTasks.includes(pt.id));
              return (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  xp={task.xp}
                  completed={done}
                  available={!done && prevDone}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
