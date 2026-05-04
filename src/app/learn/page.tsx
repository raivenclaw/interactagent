'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { StreakBar } from '@/components/StreakBar';
import { SkillTree } from '@/components/SkillTree';
import { StreakPopup } from '@/components/StreakPopup';
import { AppState, StreakInfo } from '@/lib/types';
import { loadState, saveState, updateStreak } from '@/lib/store';

export default function LearnDashboard() {
  const router = useRouter();
  const [state, setState] = useState<AppState | null>(null);
  const [streakInfo, setStreakInfo] = useState<StreakInfo | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboarded) {
      router.replace('/');
      return;
    }
    const info = updateStreak(s);
    saveState(s);
    setState(s);
    if (info) {
      setTimeout(() => setStreakInfo(info), 600);
    }
  }, [router]);

  const handleToggleLevel = useCallback((id: number) => {
    setState((prev) => {
      if (!prev) return prev;
      const next = { ...prev, expandedLevels: { ...prev.expandedLevels, [id]: !prev.expandedLevels[id] } };
      saveState(next);
      return next;
    });
  }, []);

  if (!state) return null;

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning!' : hour < 18 ? 'Good afternoon!' : 'Good evening!';

  return (
    <div className="min-h-dvh">
      <StreakBar
        streak={state.streak}
        xp={state.xp}
        avatarLabel="D"
        onAvatarClick={() => router.push('/badges')}
      />
      <div className="p-5 max-w-[520px] mx-auto">
        <p className="text-lg font-semibold mb-1 text-foreground">{greeting}</p>
        <p className="text-sm text-muted-foreground mb-8">Complete tasks to earn XP and unlock badges.</p>
        <SkillTree state={state} onToggleLevel={handleToggleLevel} />
      </div>
      <StreakPopup info={streakInfo} onClose={() => setStreakInfo(null)} />
    </div>
  );
}
