import { z } from 'zod';
import { PlaceDtoSchema } from '../api/types';

export const PlaceSchema = PlaceDtoSchema.transform((dto) => ({
  id: dto.id,
  name: dto.name,
  address: dto.address,
  coordinates: dto.coordinates,
  services: dto.services.map((service) => ({
    id: service.id,
    name: service.name,
    price: service.price,
    duration: service.duration,
    images: service.images,
  })),
}));

export type Place = z.infer<typeof PlaceSchema>;
