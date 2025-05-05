export type ResponseServiceDto = {
  data: ServiceDto[];
};

export type ServiceDto = {
  id: string;
  name: string;
  addons: { name: string; price: number }[];
  place: { name: string };
};
