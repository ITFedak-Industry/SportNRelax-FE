import { PlaceDto } from '../types';

export const mockPlaces: PlaceDto[] = Array.from({ length: 10 }).map(
  (_, i) => ({
    id: `place-${i}-${Math.random().toString(36).substring(2, 9)}`,
    name: `Wellness Center ${i + 1}`,
    address: `Street ${100 + i}, Cityville`,
    coordinates: [49.8397 + Math.random(), 24.0297 + Math.random()],
    services: Array.from({ length: 4 }).map((_, j) => ({
      id: `service-${j}-${Math.random().toString(36).substring(2, 9)}`,
      name: ['Massage Therapy', 'Aromatherapy', 'Sauna', 'Facial'][j % 4],
      price: 150 + j * 50,
      duration: 60 + j * 10,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnI2qM881yQAtVvoUCCozYs36auxMXP-Iqg&s',
      ],
    })),
  }),
);
