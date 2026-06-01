import { z } from "zod";

export const createRouteSchema = z.object({
  destinationId: z.string().uuid(),
  name: z.string().min(2).max(100),
  basecampName: z.string().min(2).max(100).optional().nullable(),
  basecampLocation: z.string().max(200).optional().nullable(),
  estimatedUpHours: z.coerce.number().min(0).optional().nullable(),
  estimatedDownHours: z.coerce.number().min(0).optional().nullable(),
  difficultyLevel: z.enum(["EASY", "MODERATE", "HARD", "EXTREME"]),
  hasWaterSource: z.boolean().default(false),
  campAvailable: z.boolean().default(false),
  notes: z.string().max(2000).optional().nullable(),
});

export const updateRouteSchema = createRouteSchema.partial();

export type CreateRouteInput = z.infer<typeof createRouteSchema>;
export type UpdateRouteInput = z.infer<typeof updateRouteSchema>;
