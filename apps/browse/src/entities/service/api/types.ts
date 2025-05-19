export type ServiceDto = {
  id: string;
  name: string;
  price: number;
  duration: number;
  image: string;
  place: { name: string; address: string };
};
