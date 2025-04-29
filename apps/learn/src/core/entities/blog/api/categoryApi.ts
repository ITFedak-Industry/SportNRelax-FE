import { FetchQueryOptions, useQuery } from '@tanstack/react-query';

export const queryBlogPost = (id: string): FetchQueryOptions<string[]> => ({
  queryKey: ['blog', id],
  queryFn: () => ['123', '456'],
});

export const useBlogPostQuery = (id: string) => {
  return useQuery({
    ...queryBlogPost(id),
    enabled: !!id,
  });
};
