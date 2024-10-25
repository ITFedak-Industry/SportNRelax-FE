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

  return (
    <>
      <MainPage ssrPreloadActions={ssrPreloadActions} />
    </>
  );
}
