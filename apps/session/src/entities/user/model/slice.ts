import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../api/userApi';

type UserSliceState =
  | {
      accessToken: string;
      id: string;
      isAuthorized: true;
    }
  | {
      isAuthorized: false;
      accessToken?: string;
      id?: string;
    };

const initialState: UserSliceState = {
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined;
      state.id = undefined;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.me.matchFulfilled,
      (state: UserSliceState, { payload }) => {
        state.isAuthorized = true;

        // say TypeScript that isAuthorized = true
        if (state.isAuthorized) {
          state.id = payload.id;
          state.accessToken = payload.email;
        }
      },
    );
  },
});

export function selectIsAuthorized(state: RootState) {
  return state.user.isAuthorized;
}

export const selectUserId = (state: RootState) => state.user.id;

export const { clearSessionData } = userSlice.actions;
