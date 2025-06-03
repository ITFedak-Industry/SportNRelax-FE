import {
  baseApi,
  ApiResponse,
  catalogHttpClient,
  sessionHttpClient,
} from '@src/shared/api';

import { Service } from '../model/types';
import { mapService } from '../lib/mapService';

export async function getServiceById(id: string): Promise<Service> {
  const { data } = await catalogHttpClient.get<ApiResponse>(`/services/${id}`);
  return mapService(data);
}

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    bookService: build.mutation<void, void>({
      queryFn: async () => {
        await sessionHttpClient.post('/', { body: null });
        return { data: undefined };
      },
    }),
  }),
});

export const { useBookServiceMutation } = serviceApi;
