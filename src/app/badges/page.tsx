'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { StreakBar } from '@/components/StreakBar';
import { BadgeGrid } from '@/components/BadgeGrid';
import { AppState } from '@/lib/types';
import { loadState } from '@/lib/store';

export default function BadgesPage() {
  const router = useRouter();
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboarded) {
      router.replace('/');
      return;
    }
    setState(s);
  }, [router]);

  if (!state) return null;

  return (
    <div className="min-h-dvh">
      <StreakBar streak={state.streak} xp={state.xp} showBackButton />
      <div className="p-5 max-w-[520px] mx-auto">
        <h2 className="text-[1.3rem] font-extrabold mb-1">Your Badges</h2>
        <p className="text-[0.85rem] text-muted mb-2">Complete levels to unlock badges</p>
        <BadgeGrid earnedBadges={state.earnedBadges} />
      </div>
    </div>
  );
}
