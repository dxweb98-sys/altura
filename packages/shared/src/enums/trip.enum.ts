export const TRIP_PACE = {
  SLOW: "SLOW",
  NORMAL: "NORMAL",
  FAST: "FAST",
} as const;

export type TripPace = (typeof TRIP_PACE)[keyof typeof TRIP_PACE];

export const TRIP_TARGET = {
  SUNRISE: "SUNRISE",
  SUNSET: "SUNSET",
  CAMPING: "CAMPING",
  DAY_HIKE: "DAY_HIKE",
} as const;

export type TripTarget = (typeof TRIP_TARGET)[keyof typeof TRIP_TARGET];

export const TRIP_STATUS = {
  DRAFT: "DRAFT",
  PLANNED: "PLANNED",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
} as const;

export type TripStatus = (typeof TRIP_STATUS)[keyof typeof TRIP_STATUS];
