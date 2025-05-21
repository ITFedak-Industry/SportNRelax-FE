export type Place = {
  id: string;
  coordinates: [number, number];
  name: string;
  address: string;
  services: Service[];
};

export type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
  image: string;
};
