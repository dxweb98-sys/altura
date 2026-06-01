import { z } from "zod";

export const createTripPlanSchema = z.object({
  title: z.string().min(2).max(120),
  destinationId: z.string().uuid(),
  routeId: z.string().uuid().optional().nullable(),
  originCity: z.string().min(2).max(80),
  peopleCount: z.coerce.number().int().min(1).max(30),
  budgetPerPerson: z.coerce.number().int().min(0),
  target: z.enum(["SUNRISE", "SUNSET", "CAMPING", "DAY_HIKE"]),
  pace: z.enum(["SLOW", "NORMAL", "FAST"]),
  startDate: z.coerce.date(),
  arrivalTime: z.string().optional().nullable(),
  startHikingTime: z.string().optional().nullable(),
  notes: z.string().max(1000).optional().nullable(),
});

export const updateTripPlanSchema = createTripPlanSchema.partial();

export type CreateTripPlanInput = z.infer<typeof createTripPlanSchema>;
export type UpdateTripPlanInput = z.infer<typeof updateTripPlanSchema>;
