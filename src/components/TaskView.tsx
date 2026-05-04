'use client';

import { useState } from 'react';
import { Task, Level } from '@/lib/types';
import { CodeBlock } from './CodeBlock';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface TaskViewProps {
  task: Task;
  level: Level;
  completed: boolean;
  onComplete: () => void;
}

export function TaskView({ task, level, completed, onComplete }: TaskViewProps) {
  const [isDone, setIsDone] = useState(completed);

  const handleComplete = () => {
    if (isDone) return;
    setIsDone(true);
    onComplete();
  };

  return (
    <div className="p-5 max-w-[560px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tighter leading-none mb-3">{task.title}</h1>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-primary font-bold">
            <svg className="w-3 h-3 mr-0.5" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 0L8.5 4H13L9.5 6.5L11 11L7 8.5L3 11L4.5 6.5L1 4H5.5L7 0Z" />
            </svg>
            +{task.xp} XP
          </Badge>
          <Badge variant="secondary" className="font-medium">
            <svg className="w-3 h-3 mr-0.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="6" />
              <path d="M7 3.5V7L9.5 8.5" />
            </svg>
            {task.time}
          </Badge>
          <Badge variant="secondary" className="font-medium">
            Level {level.id}
          </Badge>
        </div>
      </div>

      {/* Why section */}
      <Card className="mb-6 border-amber-200/60 bg-amber-50/50">
        <CardContent className="pt-1">
          <div className="text-[0.72rem] font-bold text-amber-600 uppercase tracking-wider mb-1.5">Why this matters</div>
          <div className="text-[0.9rem] leading-relaxed text-foreground">{task.why}</div>
        </CardContent>
      </Card>

      {/* Steps */}
      <div className="mb-7">
        <h3 className="text-[0.95rem] font-bold mb-4">Step by step</h3>
        {task.steps.map((step, i) => (
          <div key={i}>
            <div className="flex gap-3 py-3">
              <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[0.78rem] font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="text-[0.9rem] leading-relaxed pt-1">{step.text}</div>
            </div>
            {i < task.steps.length - 1 && <Separator className="ml-10" />}
          </div>
        ))}
        <div className="mt-4">
          <CodeBlock code={task.code} />
        </div>
      </div>

      {/* Complete button */}
      <Button
        onClick={handleComplete}
        disabled={isDone}
        className={`w-full h-14 text-base font-bold rounded-xl transition-all ${
          isDone
            ? 'bg-muted text-muted-foreground cursor-not-allowed'
            : 'bg-emerald-500 text-white shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)] hover:bg-emerald-500'
        }`}
      >
        {isDone ? (
          <>
            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className="mr-1.5">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Completed
          </>
        ) : (
          `Mark as Complete — +${task.xp} XP`
        )}
      </Button>
    </div>
  );
}
