import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from '../shared/api';
import { userSlice } from '@src/entities/user/model/slice';

export function makeStore() {
  const store = configureStore({
    devTools: {
      name: 'Session',
    },
    reducer: combineReducers({
      [userSlice.reducerPath]: userSlice.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

  setupListeners(store.dispatch);

  return store;
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
