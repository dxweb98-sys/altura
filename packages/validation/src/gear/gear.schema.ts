import { z } from "zod";

export const createGearItemSchema = z.object({
  name: z.string().min(2).max(100),
  category: z.string().min(2).max(80),
  type: z.enum(["PERSONAL", "GROUP"]),
  priority: z.enum(["REQUIRED", "RECOMMENDED", "OPTIONAL"]),
  notes: z.string().max(500).optional().nullable(),
});

export const updateGearItemSchema = createGearItemSchema.partial();

export type CreateGearItemInput = z.infer<typeof createGearItemSchema>;
export type UpdateGearItemInput = z.infer<typeof updateGearItemSchema>;
