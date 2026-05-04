'use client';

import { LEVELS } from '@/lib/data';
import { AppState } from '@/lib/types';
import { LevelCard } from './LevelCard';

interface SkillTreeProps {
  state: AppState;
  onToggleLevel: (id: number) => void;
}

export function SkillTree({ state, onToggleLevel }: SkillTreeProps) {
  return (
    <div>
      {LEVELS.map((level, li) => {
        const totalTasks = level.tasks.length;
        const done = level.tasks.filter((t) => state.completedTasks.includes(t.id)).length;
        const prevDone = li === 0 || LEVELS[li - 1].tasks.every((t) => state.completedTasks.includes(t.id));
        const isComplete = done === totalTasks;
        const isCurrent = prevDone && !isComplete;
        const status = isComplete ? 'completed' : isCurrent ? 'current' : 'locked';
        const expanded = state.expandedLevels[level.id] || isCurrent;

        return (
          <LevelCard
            key={level.id}
            level={level}
            status={status}
            completedTasks={state.completedTasks}
            expanded={expanded}
            onToggle={() => onToggleLevel(level.id)}
          />
        );
      })}
    </div>
  );
}
