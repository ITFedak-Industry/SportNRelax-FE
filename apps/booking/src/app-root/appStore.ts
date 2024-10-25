import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { baseApi } from '@/shared/api';

import { sessionSlice } from '@/entities/session';
import { themeSlice } from '@/entities/theme';

import { logoutMiddleware } from '@/features/session/logout';

import { debugModeSlice } from '@/widgets/DebugModeToggler';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [sessionSlice.name, debugModeSlice.name, themeSlice.name],
};

export function makeStore() {
  const store = configureStore({
    devTools: {
      name: 'Booking',
    },
    // 👇 ATTENTION: persistReducer broke infering RootState
    reducer: persistReducer(
      persistConfig,
      rootReducer,
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware, logoutMiddleware.middleware),
  });

  setupListeners(store.dispatch);

  return store;
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
