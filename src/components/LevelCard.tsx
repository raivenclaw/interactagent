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
    <div className="border-t border-border pt-6 pb-6">
      <div
        onClick={status !== 'locked' ? onToggle : undefined}
        className={`${
          status === 'locked' ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-bold text-foreground">{level.id}</span>
            <span className="text-sm font-semibold text-foreground">{level.name}</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            {doneCount}/{totalTasks}
          </span>
        </div>

        <p className="text-xs text-muted-foreground mb-3">{level.subtitle}</p>

        {/* Progress bar */}
        <div className="h-[2px] bg-border rounded-sm overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Task list */}
      {expanded && status !== 'locked' && (
        <div className="mt-4 flex flex-col gap-1">
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
  );
}
