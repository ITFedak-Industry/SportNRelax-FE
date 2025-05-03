import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from './appStore';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider key="provider" store={storeRef.current}>
      {children}
    </Provider>
  );
}
