'use client';

import { useState } from 'react';
import { Task, Level } from '@/lib/types';
import { CodeBlock } from './CodeBlock';

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
      <div className="mb-6">
        <h1 className="text-[1.4rem] font-extrabold mb-1.5">{task.title}</h1>
        <div className="flex items-center gap-4 text-[0.8rem] text-muted font-semibold">
          <span className="text-deep-red">
            <svg className="inline w-3.5 h-3.5 mr-0.5" viewBox="0 0 14 14" fill="currentColor">
              <path d="M7 0L8.5 4H13L9.5 6.5L11 11L7 8.5L3 11L4.5 6.5L1 4H5.5L7 0Z" />
            </svg>
            +{task.xp} XP
          </span>
          <span>
            <svg className="inline w-3.5 h-3.5 mr-0.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="7" cy="7" r="6" />
              <path d="M7 3.5V7L9.5 8.5" />
            </svg>
            {task.time}
          </span>
          <span>Level {level.id}</span>
        </div>
      </div>

      {/* Why section */}
      <div className="bg-amber-50 rounded-[14px] p-5 mb-6">
        <div className="text-[0.72rem] font-bold text-amber-500 uppercase tracking-wider mb-1">Why this matters</div>
        <div className="text-[0.9rem] leading-relaxed">{task.why}</div>
      </div>

      {/* Steps */}
      <div className="mb-7">
        <h3 className="text-[0.95rem] font-bold mb-3.5">Step by step</h3>
        {task.steps.map((step, i) => (
          <div key={i} className="flex gap-3 mb-4">
            <div className="w-7 h-7 rounded-full bg-red-50 text-deep-red flex items-center justify-center text-[0.78rem] font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </div>
            <div className="text-[0.9rem] leading-relaxed">{step.text}</div>
          </div>
        ))}
        <CodeBlock code={task.code} />
      </div>

      {/* Complete button */}
      <button
        onClick={handleComplete}
        disabled={isDone}
        className={`w-full text-base font-bold py-4 rounded-[14px] flex items-center justify-center gap-2 transition-all ${
          isDone
            ? 'bg-[#D1CDC8] text-white cursor-not-allowed'
            : 'bg-emerald-500 text-white shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]'
        }`}
      >
        {isDone ? '\u2713 Completed' : `Mark as Complete — +${task.xp} XP`}
      </button>
    </div>
  );
}
