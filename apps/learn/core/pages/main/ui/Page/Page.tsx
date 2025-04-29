'use client';
import { useSSRPreload } from '../../../../shared/lib';

import { categoryApi, saveCategory } from '../../../../entities/category';

import { CategoryPopularList } from '../../../../widgets/CategoryPopularList';
import { ProductPopularList } from '../../../../widgets/ProductPopularList';

interface MainPageProps {
  categories: any;
}

export function MainPage({ categories }: MainPageProps) {
  // * .upsertQueryEntries do not triggers any .matchFullfilled, etc. So, hydration may not be complete
  // To resolve it we may use custom actions (i.e saveCategory()) and trigger/subscribe it where it is needed
  const ssrPreloadActions = [
    categoryApi.util.upsertQueryEntries([
      {
        endpointName: 'popularCategories',
        arg: undefined,
        value: categories,
      },
    ]),
    saveCategory(categories),
  ];
  useSSRPreload(ssrPreloadActions);

  return (
    <>
      <CategoryPopularList />
      <ProductPopularList />
    </>
  );
}
