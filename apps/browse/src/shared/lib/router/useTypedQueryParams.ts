import { useMemo } from 'react';
import type { z } from 'zod';
import { getQueryParams } from './getQueryParams';

function useQueryParams() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => getQueryParams(), [window.location.search]);
}

export function useTypedQueryParams<T extends z.ZodTypeAny>(
  schema: T,
): ReturnType<T['parse']> {
  const queryParams = useQueryParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => schema.parse(queryParams), [queryParams]);
}
