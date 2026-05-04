'use client';

import { useState } from 'react';
import { Task, Level } from '@/lib/types';
import { CodeBlock } from './CodeBlock';
import { Button } from '@/components/ui/button';

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
    <div className="p-6 max-w-[560px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight leading-tight mb-3 text-foreground">{task.title}</h1>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="font-mono">+{task.xp} XP</span>
          <span>{task.time}</span>
          <span>Level {level.id}</span>
        </div>
      </div>

      {/* Why section */}
      <div className="border-t border-border pt-5 mb-8">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Why this matters</div>
        <p className="text-sm leading-relaxed text-foreground/80">{task.why}</p>
      </div>

      {/* Steps */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-4 text-foreground">Step by step</h3>
        {task.steps.map((step, i) => (
          <div key={i} className={`${i > 0 ? 'border-t border-border' : ''}`}>
            <div className="flex gap-3 py-4">
              <span className="font-mono text-xs text-muted-foreground pt-0.5 w-5 flex-shrink-0">
                {i + 1}.
              </span>
              <span className="text-sm leading-relaxed text-foreground/80">{step.text}</span>
            </div>
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
        className={`w-full h-12 text-sm font-semibold rounded-md transition-colors ${
          isDone
            ? 'bg-muted text-muted-foreground cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary/90'
        }`}
      >
        {isDone ? 'Completed' : `Mark as Complete — +${task.xp} XP`}
      </Button>
    </div>
  );
}
