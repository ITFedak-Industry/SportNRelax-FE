import { z } from 'zod';

export const SessionSchema = z.object({
  start: z.string(),
  end: z.string(),
  serviceId: z.string(),
});

// TypeScript type inferred from schema (optional)
export type Session = z.infer<typeof SessionSchema>;
