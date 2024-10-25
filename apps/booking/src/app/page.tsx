'use server';
import { popularCategoriesQuery, categoryApi } from '@/entities/category';

import { MainPage } from '@/pages-root/main';

// eslint-disable-next-line import/no-default-export
export default async function Page() {
  const { data, error } = await popularCategoriesQuery();

  if (error) {
    return <h1>Not found</h1>;
  }

  const ssrPreloadActions = [
    categoryApi.util.upsertQueryEntries([
      {
        endpointName: 'popularCategories',
        arg: undefined,
        value: data,
      },
    ]),
  ];

  // Monitor page performance in case to alter what to pass from Server -> Client Component
  // console.log(data) // size(data) = N kilobytes
  // console.log(ssrPreloadActions) // size(ssrPreloadActions) = N kilobytes + Redux type/meta

  return (
    <>
      <MainPage ssrPreloadActions={ssrPreloadActions} />
    </>
  );
}
