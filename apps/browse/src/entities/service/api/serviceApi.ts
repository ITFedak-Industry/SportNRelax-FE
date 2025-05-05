import { SERVICE_TAG, baseApi } from '@src/shared/api';

import { mapService } from '../lib/mapService';
import { Service } from '../model/types';

import type { ResponseServiceDto } from './types';

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<Service[], void, ResponseServiceDto>({
      query: () => ({
        url: `/services`,
      }),
      transformResponse: ({ data }) => data.map(mapService),
      providesTags: [SERVICE_TAG],
    }),
  }),
});

export const { useGetServicesQuery } = serviceApi;
