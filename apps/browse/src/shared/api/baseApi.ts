import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SERVICE_TAG, SESSION_TAG } from './tags';

export const baseApi = createApi({
  tagTypes: [SERVICE_TAG, SESSION_TAG],
  reducerPath: 'api',
  baseQuery: fetchBaseQuery(),
  endpoints: () => ({}),
});
