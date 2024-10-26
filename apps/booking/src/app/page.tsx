'use server';
import { popularCategoriesQuery } from '@/entities/category';

import { MainPage } from '@/pages-root/main';

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
