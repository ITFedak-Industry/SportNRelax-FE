import { baseApi, ApiResponse, sessionHttpClient } from '@src/shared/api';

import { mapSessions } from '../lib/mapSession';

const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSessions: build.query({
      queryFn: async (id: string) => {
        const { data } = await sessionHttpClient.get<ApiResponse<unknown[]>>(
          '/',
          { queryParams: { sessionId: id } },
        );
        return { data: mapSessions(data) };
      },
    }),
  }),
});

export const { useGetSessionsQuery } = sessionApi;
