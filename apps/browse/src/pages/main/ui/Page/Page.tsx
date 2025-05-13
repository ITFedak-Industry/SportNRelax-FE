import { ServiceCard, useGetServicesQuery } from '@src/entities/service';
import { Search } from '@src/shared/ui/Search/Search';

export function MainPage() {
  const { data } = useGetServicesQuery();

  if (!data) {
    return null;
  }

  return (
    <div>
      <Search onSearch={(value) => console.log('value', value)} />
      {data.map((service) => {
        return <ServiceCard key={service.id} service={service} />;
      })}
    </div>
  );
}
