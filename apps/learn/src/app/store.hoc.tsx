'use client';
import React, { useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import type { Store } from '@reduxjs/toolkit';

type WithStoreProps = { store: Store };

export function withStore<P extends WithStoreProps>(
  Component: React.ComponentType<P>,
) {
  return function WrappedComponent(props: Omit<P, 'store'>) {
    const store = useContext(ReactReduxContext);
    return <Component {...(props as P)} store={store} />;
  };
}
