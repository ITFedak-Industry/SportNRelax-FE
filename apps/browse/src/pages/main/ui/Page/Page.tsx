import { ServiceCard, useGetServicesQuery } from '@src/entities/service';
import { FilterBy } from '@src/entities/service/ui/FilterBy';
import { SortBy } from '@src/entities/service/ui/SortBy';
import { Search } from '@src/shared/ui/Search/Search';
import { ComponentProps } from 'react';

export function MainPage() {
  const { data } = useGetServicesQuery();

  const sortByItems: ComponentProps<typeof SortBy>['items'] = [
    { name: 'New', value: 'new' },
    { name: 'Price ascending', value: 'asc' },
    { name: 'Price descending', value: 'desc' },
    { name: 'Rating', value: 'rating' },
  ];

  if (!data) {
    return null;
  }

  return (
    <div>
      <Search onSearch={(value) => console.log('value', value)} />
      <FilterBy />
      <SortBy items={sortByItems} defaultValue={sortByItems[0].value} />
      {data.map((service) => {
        return <ServiceCard key={service.id} service={service} />;
      })}
    </div>
  );
}
