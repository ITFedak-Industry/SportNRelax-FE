import { useMemo } from 'react';
// eslint-disable-next-line no-restricted-imports
import type { z } from 'zod';

export function useTypedParams<T extends z.ZodTypeAny>(
  schema: T,
): ReturnType<T['parse']> {
  const params = {};
  return useMemo(() => schema.parse(params), [params, schema]);
}
