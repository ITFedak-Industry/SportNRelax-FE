import { z } from 'zod';

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  duration: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  place: z.object({
    id: z.string(),
    coordinates: z.tuple([z.number(), z.number()]),
    name: z.string(),
    address: z.string(),
  }),
  addons: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
      description: z.string(),
    }),
  ),
});

export type Service = z.infer<typeof ServiceSchema>;
