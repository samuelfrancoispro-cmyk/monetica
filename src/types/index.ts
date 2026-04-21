export interface User {
  id: string;
  displayName: string;
  classId: string;
  xp: number;
  level: number;
  coins: number;
  createdAt: Date;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  domain: "budget" | "epargne" | "investissement" | "impots" | "entreprise";
  durationMin: number;
  xpReward: number;
  isPublished: boolean;
}

export interface XPProgress {
  currentXP: number;
  levelXP: number;
  nextLevelXP: number;
  level: number;
  percentComplete: number;
}
