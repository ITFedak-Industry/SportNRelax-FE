import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '../shared/api';

import { serviceSlice } from '@src/entities/service/model/slice';

export const rootReducer = combineReducers({
  [serviceSlice.reducerPath]: serviceSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
