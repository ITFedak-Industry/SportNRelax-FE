export type PlaceDto = {
  id: string;
  name: string;
  address: string;
  coordinates: [number, number];
  services: {
    id: string;
    name: string;
    price: number;
    duration: number;
    image: string;
  }[];
};
