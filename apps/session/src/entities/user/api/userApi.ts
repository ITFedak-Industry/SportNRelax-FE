import { USER_TAG, baseApi } from '../../../shared/api';
import { mapUser } from '../lib/mapUser';
import { User } from '../model/types';
import type { UserDto } from './types';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<User, void>({
      query: () => ({
        url: `/me`,
      }),
      transformResponse: (response: UserDto) => {
        return mapUser(response);
      },
      providesTags: [USER_TAG],
    }),
  }),
});

export const { useMeQuery } = userApi;
