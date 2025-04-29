'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { makeStore } from './appStore';
import { changeTheme } from '../entities/theme';

// eslint-disable-next-line import/no-default-export
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  storeRef.current.dispatch(changeTheme('dark'));
  const _persistedStore = persistStore(storeRef.current);

  return (
    <Provider key="provider" store={storeRef.current}>
      {/* <PersistGate loading={<>Loading...</>} persistor={persistedStore}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
