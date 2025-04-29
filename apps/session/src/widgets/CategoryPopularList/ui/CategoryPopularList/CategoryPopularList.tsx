import { useMemo } from 'react';

import { useAppSelector } from '../../../../shared/model';
import { useFeatureSlicedDebug } from '../../../../shared/lib';

import {
  CategoryCard,
  usePopularCategoriesQuery,
} from '../../../../entities/category';

import css from './CategoryPopularList.module.css';

export function CategoryPopularList() {
  const { rootAttributes } = useFeatureSlicedDebug(
    'widget/CategoryPopularList',
  );
  const savedCategoriesFromApi = useAppSelector(
    (state) => state.cart.categories,
  );

  const { data: categories = [], isLoading } = usePopularCategoriesQuery();
  const items = useMemo(() => categories.slice(0, 3), [categories]);

  if (isLoading) {
    return <div className={css.root}>isloading</div>;
  }

  if (items.length < 3) {
    return null;
  }

  return (
    <>
      <div className={css.root} {...rootAttributes}>
        <h2>New Collections</h2>
        <div className={css.content}>
          <h2>From category api here: ssr and client side</h2>
          {items.map((category) => (
            <div key={category.id} className={css.item}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
      <div className={css.root} {...rootAttributes}>
        <h2>New Collections</h2>
        <div className={css.content}>
          <h2>
            From cart slice that saved from category api here: ssr and client
            side
          </h2>
          {savedCategoriesFromApi.map((category) => (
            <div key={category.id} className={css.item}>
              <div>{category.id}</div>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
