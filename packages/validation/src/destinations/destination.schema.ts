import { z } from "zod";

export const createDestinationSchema = z.object({
  name: z.string().min(2).max(100),
  type: z.string().min(2).max(50),
  province: z.string().min(2).max(100),
  region: z.string().min(2).max(100).optional().nullable(),
  elevation: z.coerce.number().int().min(0).optional().nullable(),
  description: z.string().max(2000).optional().nullable(),
  bestSeason: z.string().max(120).optional().nullable(),
  difficultyLevel: z.enum(["EASY", "MODERATE", "HARD", "EXTREME"]),
});

export const updateDestinationSchema = createDestinationSchema.partial();

export type CreateDestinationInput = z.infer<typeof createDestinationSchema>;
export type UpdateDestinationInput = z.infer<typeof updateDestinationSchema>;
