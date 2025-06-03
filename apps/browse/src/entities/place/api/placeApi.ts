import { baseApi, ApiResponse, catalogHttpClient } from '@src/shared/api';

import { mapPlace } from '../lib/mapPlace';
import type { Place } from '../model/types';
import type { PlaceDto } from './types';

const placeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaces: build.query<Place[], void>({
      queryFn: async () => {
        const { data } =
          await catalogHttpClient.get<ApiResponse<PlaceDto[]>>('/places');
        return { data: data.map(mapPlace) };
      },
    }),
  }),
});

export const { useGetPlacesQuery } = placeApi;
