export type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  images: string[];
  place: {
    id: string;
    coordinates: [number, number];
    name: string;
    address: string;
  };
  addons: {
    name: string;
    price: string;
    description: string;
  }[];
};
