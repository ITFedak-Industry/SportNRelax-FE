export type Service = {
  id: string;
  name: string;
  addons: { name: string; price: number }[];
  place: { name: string };
};
