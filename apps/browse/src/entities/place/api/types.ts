import { z } from 'zod';

export const PlaceDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
  services: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      duration: z.number(),
      images: z.array(z.string()),
    }),
  ),
});

export type PlaceDto = z.infer<typeof PlaceDtoSchema>;
