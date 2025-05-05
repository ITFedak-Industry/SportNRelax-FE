import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';
import { SERVICE_TAG, SESSION_TAG } from './tags';

export const baseApi = createApi({
  tagTypes: [SERVICE_TAG, SESSION_TAG],
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
