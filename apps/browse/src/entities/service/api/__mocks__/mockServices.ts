import { ServiceDto } from '../types';

export const mockServices: ServiceDto[] = Array.from({ length: 10 }).map(
  () => ({
    id: Math.random().toString(),
    name: 'Massage Therapy',
    place: {
      name: 'Zen Wellness Center',
      address: 'Городоцька, 380',
    },
    price: 200,
    duration: 80,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnI2qM881yQAtVvoUCCozYs36auxMXP-Iqg&s',
  }),
);
