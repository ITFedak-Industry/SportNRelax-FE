import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '../shared/api';

import { userSlice } from '@src/entities/user/model/slice';

export const rootReducer = combineReducers({
  [userSlice.reducerPath]: userSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
