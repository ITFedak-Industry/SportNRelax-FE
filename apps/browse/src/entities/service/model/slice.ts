import { createSlice } from '@reduxjs/toolkit';
import { serviceApi } from '../api/serviceApi';
import { Service } from './types';

type ServiceSliceState = {
  services: Service[];
};

const initialState: ServiceSliceState = {
  services: [],
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      serviceApi.endpoints.getServices.matchFulfilled,
      (state: ServiceSliceState, { payload }) => {
        state.services = payload;
      },
    );
  },
});

export function selectServices(state: RootState) {
  return state.service.services;
}
