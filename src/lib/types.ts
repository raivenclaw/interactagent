export interface Step {
  text: string;
}

export interface Task {
  id: string;
  title: string;
  desc: string;
  xp: number;
  time: string;
  why: string;
  steps: Step[];
  code: string;
}

export interface Level {
  id: number;
  name: string;
  subtitle: string;
  badge: string;
  badgeName: string;
  tasks: Task[];
}

export interface Badge {
  levelId: number;
  emoji: string;
  name: string;
}

export interface AppState {
  onboarded: boolean;
  persona: string;
  xp: number;
  streak: number;
  lastVisit: string;
  completedTasks: string[];
  earnedBadges: number[];
  expandedLevels: Record<number, boolean>;
}

export interface StreakInfo {
  type: 'continue' | 'broken' | 'milestone';
  streak?: number;
  oldStreak?: number;
}
