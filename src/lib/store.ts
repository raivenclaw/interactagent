import { AppState, StreakInfo } from './types';

const STORAGE_KEY = 'learn_state';

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function defaultState(): AppState {
  return {
    onboarded: false,
    persona: 'd2c',
    xp: 0,
    streak: 1,
    lastVisit: todayStr(),
    completedTasks: [],
    earnedBadges: [],
    expandedLevels: {},
  };
}

export function loadState(): AppState {
  if (typeof window === 'undefined') return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const s = JSON.parse(raw) as AppState;
    return s && s.completedTasks ? s : defaultState();
  } catch {
    return defaultState();
  }
}

export function saveState(state: AppState): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function updateStreak(state: AppState): StreakInfo | null {
  const today = todayStr();
  const last = state.lastVisit;

  if (!last) {
    state.streak = 1;
    state.lastVisit = today;
    return null;
  }

  if (last === today) return null;

  const d1 = new Date(last);
  const d2 = new Date(today);
  const diff = Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));

  if (diff === 1) {
    state.streak++;
    state.lastVisit = today;
    return { type: 'continue', streak: state.streak };
  } else if (diff > 1) {
    const oldStreak = state.streak;
    state.streak = 1;
    state.lastVisit = today;
    return { type: 'broken', oldStreak };
  }

  return null;
}
