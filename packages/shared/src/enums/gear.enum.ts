export const GEAR_TYPE = {
  PERSONAL: "PERSONAL",
  GROUP: "GROUP",
} as const;

export type GearType = (typeof GEAR_TYPE)[keyof typeof GEAR_TYPE];

export const GEAR_PRIORITY = {
  REQUIRED: "REQUIRED",
  RECOMMENDED: "RECOMMENDED",
  OPTIONAL: "OPTIONAL",
} as const;

export type GearPriority = (typeof GEAR_PRIORITY)[keyof typeof GEAR_PRIORITY];
