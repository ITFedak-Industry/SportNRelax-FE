'use server';
import { popularCategoriesQuery } from '@src/entities/category';

import { MainPage } from '@src/pages/main';

// eslint-disable-next-line import/no-default-export
export default async function Page() {
  const { data, error } = await popularCategoriesQuery();

  if (error) {
    return <h1>Not found</h1>;
  }

  return (
    <>
      <MainPage categories={data} />
    </>
  );
}
