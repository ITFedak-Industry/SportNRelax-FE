import { useGetServicesQuery } from '@src/entities/service';

export function MainPage() {
  const { data } = useGetServicesQuery();
  console.log('Main page', data);

  return <div>Main page {data?.join(',')}</div>;
}
