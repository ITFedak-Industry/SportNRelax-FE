import {
  FetchQueryOptions,
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';

export const PrefetchQueriesProvider = async ({
  queries,
  children,
}: {
  queries: FetchQueryOptions[];
  children: JSX.Element;
}) => {
  const queryClient = new QueryClient();

  for (const query of queries) {
    await queryClient.prefetchQuery(query);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
