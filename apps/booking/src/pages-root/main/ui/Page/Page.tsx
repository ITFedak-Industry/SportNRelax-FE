'use client';
import { Action } from '@reduxjs/toolkit';

import { useSSRPreload } from '@/shared/lib';

import { CategoryPopularList } from '@/widgets/CategoryPopularList';
import { ProductPopularList } from '@/widgets/ProductPopularList';

interface MainPageProps {
  ssrPreloadActions: Action[];
}

export function MainPage({ ssrPreloadActions }: MainPageProps) {
  useSSRPreload(ssrPreloadActions);

  return (
    <>
      <CategoryPopularList />
      <ProductPopularList />
    </>
  );
}
