export const DIFFICULTY_LEVEL = {
  EASY: "EASY",
  MODERATE: "MODERATE",
  HARD: "HARD",
  EXTREME: "EXTREME",
} as const;

export type DifficultyLevel = (typeof DIFFICULTY_LEVEL)[keyof typeof DIFFICULTY_LEVEL];
