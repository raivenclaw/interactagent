'use client';

import { useEffect, useState, useCallback, use } from 'react';
import { useRouter } from 'next/navigation';
import { StreakBar } from '@/components/StreakBar';
import { TaskView } from '@/components/TaskView';
import { ConfettiEffect, spawnConfettiAt } from '@/components/ConfettiEffect';
import { StreakPopup } from '@/components/StreakPopup';
import { LEVELS } from '@/lib/data';
import { AppState, StreakInfo } from '@/lib/types';
import { loadState, saveState } from '@/lib/store';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TaskPage({ params }: { params: Promise<{ taskId: string }> }) {
  const { taskId } = use(params);
  const router = useRouter();
  const [state, setState] = useState<AppState | null>(null);
  const [confetti, setConfetti] = useState({ x: 0, y: 0, trigger: 0 });
  const [xpFly, setXpFly] = useState<{ xp: number; id: number } | null>(null);
  const [streakInfo, setStreakInfo] = useState<StreakInfo | null>(null);
  const [badgeUnlock, setBadgeUnlock] = useState<{ emoji: string; name: string } | null>(null);

  useEffect(() => {
    const s = loadState();
    if (!s.onboarded) {
      router.replace('/');
      return;
    }
    setState(s);
  }, [router]);

  const level = LEVELS.find((l) => l.tasks.some((t) => t.id === taskId));
  const task = level?.tasks.find((t) => t.id === taskId);

  const handleComplete = useCallback(() => {
    if (!task || !level) return;
    setState((prev) => {
      if (!prev || prev.completedTasks.includes(task.id)) return prev;
      const next = {
        ...prev,
        completedTasks: [...prev.completedTasks, task.id],
        xp: prev.xp + task.xp,
      };

      // Check badge
      if (level.tasks.every((t) => next.completedTasks.includes(t.id))) {
        if (!next.earnedBadges.includes(level.id)) {
          next.earnedBadges = [...next.earnedBadges, level.id];
          setTimeout(() => {
            setBadgeUnlock({ emoji: level.badge, name: level.badgeName });
            spawnConfettiAt(setConfetti, window.innerWidth / 2, window.innerHeight / 2 - 50);
          }, 800);
        }
      }

      saveState(next);
      return next;
    });

    // XP fly animation
    setXpFly({ xp: task.xp, id: Date.now() });
    setTimeout(() => setXpFly(null), 1100);

    // Confetti
    spawnConfettiAt(setConfetti, window.innerWidth / 2, window.innerHeight - 100);

    // Check streak milestones
    if (state && [7, 14, 30].includes(state.streak)) {
      setTimeout(() => setStreakInfo({ type: 'milestone', streak: state.streak }), 1500);
    }
  }, [task, level, state]);

  if (!state || !task || !level) return null;

  const completed = state.completedTasks.includes(task.id);

  return (
    <div className="min-h-dvh">
      <StreakBar streak={state.streak} xp={state.xp} showBackButton />
      <TaskView task={task} level={level} completed={completed} onComplete={handleComplete} />

      {/* XP fly animation */}
      {xpFly && (
        <div
          key={xpFly.id}
          className="fixed text-[1.1rem] font-extrabold text-primary z-[700] pointer-events-none animate-fly-up"
          style={{ left: '50%', bottom: '120px', transform: 'translateX(-50%)' }}
        >
          +{xpFly.xp} XP
        </div>
      )}

      <ConfettiEffect x={confetti.x} y={confetti.y} trigger={confetti.trigger} />
      <StreakPopup info={streakInfo} onClose={() => setStreakInfo(null)} />

      {/* Badge unlock overlay */}
      {badgeUnlock && (
        <Dialog open onOpenChange={(open) => { if (!open) setBadgeUnlock(null); }}>
          <DialogContent showCloseButton={false} className="text-center max-w-[340px] p-12 rounded-2xl">
            <DialogHeader className="items-center">
              <div className="text-[4rem] leading-none animate-bounce-in">{badgeUnlock.emoji}</div>
              <Badge variant="secondary" className="text-emerald-600 text-[0.7rem] font-bold uppercase tracking-wider">
                Badge Unlocked
              </Badge>
              <DialogTitle className="text-[1.4rem] font-extrabold">{badgeUnlock.name}</DialogTitle>
            </DialogHeader>
            <Button
              onClick={() => setBadgeUnlock(null)}
              className="w-full h-14 text-base font-bold rounded-xl bg-primary text-primary-foreground shadow-[0_4px_14px_rgba(139,26,16,0.3)] hover:-translate-y-0.5 hover:bg-primary/90 active:translate-y-0 transition-all"
            >
              Awesome!
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
