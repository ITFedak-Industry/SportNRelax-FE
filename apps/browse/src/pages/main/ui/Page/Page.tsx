import { ServiceCard, useGetServicesQuery } from '@src/entities/service';

export function MainPage() {
  const { data } = useGetServicesQuery();

  if (!data) {
    return null;
  }

  return data.map((service) => {
    return <ServiceCard key={service.id} service={service} />;
  });
}
