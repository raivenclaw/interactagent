'use client';

import { Level } from '@/lib/types';
import { TaskItem } from './TaskItem';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

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
      {/* Timeline dot */}
      <div
        className={`absolute -left-7 top-5 w-[26px] h-[26px] rounded-full border-[3px] border-background flex items-center justify-center text-[0.65rem] font-extrabold text-white z-[2] transition-all ${
          status === 'completed'
            ? 'bg-emerald-500'
            : status === 'current'
            ? 'bg-primary animate-pulse-ring'
            : 'bg-muted-foreground/40'
        }`}
      >
        {status === 'completed' ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          level.id
        )}
      </div>

      {/* Card */}
      <Card
        onClick={status !== 'locked' ? onToggle : undefined}
        className={`transition-all border-2 py-5 ${
          status === 'current'
            ? 'border-primary shadow-[0_4px_20px_rgba(139,26,16,0.1)] cursor-pointer hover:shadow-[0_6px_24px_rgba(139,26,16,0.15)]'
            : status === 'completed'
            ? 'border-emerald-500/60 opacity-85 cursor-pointer hover:opacity-100'
            : 'border-border opacity-50 cursor-not-allowed'
        }`}
      >
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-[0.65rem] font-bold uppercase tracking-wider">
              Level {level.id}
            </Badge>
            <Badge variant="outline" className="text-[0.7rem] font-semibold">
              {doneCount}/{totalTasks} tasks
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <div className="text-[1.05rem] font-bold leading-tight">{level.name}</div>
            <div className="text-[0.8rem] text-muted-foreground mt-0.5">{level.subtitle}</div>
          </div>

          <Progress value={progress} className="[&_[data-slot=progress-track]]:h-1.5 [&_[data-slot=progress-indicator]]:rounded-sm [&_[data-slot=progress-track]]:rounded-sm [&_[data-slot=progress-indicator]]:bg-emerald-500">
          </Progress>

          <div className="flex items-center gap-2">
            <Badge variant={status === 'completed' ? 'secondary' : 'outline'} className="text-[0.7rem]">
              {status === 'completed' ? 'Badge earned' : `${totalTasks - doneCount} remaining`}
            </Badge>
          </div>

          {/* Task list */}
          {expanded && status !== 'locked' && (
            <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-border">
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
        </CardContent>
      </Card>
    </div>
  );
}
