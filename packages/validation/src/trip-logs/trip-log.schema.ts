import { z } from "zod";

export const createTripLogSchema = z.object({
  tripPlanId: z.string().uuid(),
  actualBudget: z.coerce.number().int().min(0).optional().nullable(),
  actualUpHours: z.coerce.number().min(0).optional().nullable(),
  actualDownHours: z.coerce.number().min(0).optional().nullable(),
  rating: z.coerce.number().int().min(1).max(5).optional().nullable(),
  reflection: z.string().max(2000).optional().nullable(),
});

export const updateTripLogSchema = createTripLogSchema.partial().omit({ tripPlanId: true });

export type CreateTripLogInput = z.infer<typeof createTripLogSchema>;
export type UpdateTripLogInput = z.infer<typeof updateTripLogSchema>;
