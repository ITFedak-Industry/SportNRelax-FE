import { useRef } from 'react';
import { Action } from '@reduxjs/toolkit';

import { useAppDispatch } from '@/shared/model';

export const useSSRPreload = (preloadEntries: Action[]) => {
  const isBrowserPreLoaded = useRef(false);
  const dispatch = useAppDispatch();
  const IS_SERVER = typeof window === 'undefined';

  const preLoad = (machine: string) => {
    console.log(`Pre loading ${machine}`);
    preloadEntries.forEach((action) => {
      dispatch(action);
    });
  };

  if (IS_SERVER) {
    preLoad('server');
  } else if (isBrowserPreLoaded.current === false) {
    isBrowserPreLoaded.current = true;
    preLoad('browser');
  }
};
