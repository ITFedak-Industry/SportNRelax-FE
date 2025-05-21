import { SERVICE_TAG, baseApi, ApiResponse } from '@src/shared/api';

import { mapPlace } from '../lib/mapPlace';
import { Place } from '../model/types';

import type { PlaceDto } from './types';

export const placeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaces: build.query<Place[], void, ApiResponse<PlaceDto[]>>({
      query: () => ({
        url: `/places`,
      }),
      transformResponse: ({ data }) => data.map(mapPlace),
      providesTags: [SERVICE_TAG],
    }),
  }),
});

export const { useGetPlacesQuery } = placeApi;
