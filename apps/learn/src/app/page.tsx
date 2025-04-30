'use server';
import { PrefetchQueriesProvider } from '@src/app/PrefetchQueriesProvider';

import { queryBlogPost } from '@src/entities/blog/api/categoryApi';

import { MainPage } from '@src/pages/main';

// eslint-disable-next-line import/no-default-export
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id = '15' } = await params;
  const queries = [queryBlogPost(id)];

  return (
    <PrefetchQueriesProvider queries={queries}>
      <MainPage id={id} />
    </PrefetchQueriesProvider>
  );
}
