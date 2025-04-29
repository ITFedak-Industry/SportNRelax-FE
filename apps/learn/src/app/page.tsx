'use server';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { queryBlogPost } from '@src/entities/blog/api/categoryApi';

import { MainPage } from '@src/pages/main';

// eslint-disable-next-line import/no-default-export
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id = '15' } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryBlogPost(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainPage id={id} />
    </HydrationBoundary>
  );
}
