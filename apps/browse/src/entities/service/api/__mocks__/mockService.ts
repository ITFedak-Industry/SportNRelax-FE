import { Service } from '../../model/types';

export const mockService: Service = {
  id: 'srv-001',
  name: 'Premium Haircut & Styling',
  price: 75,
  duration: 45, // duration in minutes
  images: [
    'https://example.com/images/service1.jpg',
    'https://example.com/images/service2.jpg',
  ],
  place: {
    id: 'plc-101',
    coordinates: [40.71, -74], // New York City coordinates
    name: 'Urban Style Salon',
    address: '123 Fashion Ave, New York, NY 10001',
  },
  addons: [
    {
      name: 'Scalp Massage',
      price: '15',
      description: 'Relaxing 10-minute head massage using essential oils.',
    },
    {
      name: 'Beard Trim',
      price: '20',
      description: 'Precise beard shaping and trimming.',
    },
  ],
};
