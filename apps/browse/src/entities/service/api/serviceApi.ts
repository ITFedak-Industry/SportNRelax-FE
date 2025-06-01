import {
  SERVICE_TAG,
  baseApi,
  ApiResponse,
  catalogHttpClient,
} from '@src/shared/api';

import { Service } from '../model/types';

export async function getServiceById(id: string): Promise<Service> {
  const { data } = await catalogHttpClient.get<ApiResponse<Service>>(
    `/services/${id}`,
  );
  return data;
}

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServiceById: build.query({
      queryFn: async (id: string) => ({ data: await getServiceById(id) }),
      providesTags: [SERVICE_TAG],
    }),
  }),
});

export const { useGetServiceByIdQuery } = serviceApi;
