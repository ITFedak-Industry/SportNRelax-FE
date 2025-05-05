import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { env } from '../lib/env';

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: env.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    // const { accessToken } = (getState() as RootState).user;

    // if (accessToken) {
    //   headers.set('Authorization', `Bearer ${accessToken}`);
    // }

    return headers;
  },
});
