import { useMemo } from 'react';
import { useParams } from 'react-router';
// eslint-disable-next-line no-restricted-imports
import type { z } from 'zod';

export function useTypedParams<T extends z.ZodTypeAny>(
  schema: T,
): ReturnType<T['parse']> {
  const params = useParams();
  return useMemo(() => schema.parse(params), [params, schema]);
}
