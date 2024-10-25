import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from '@reduxjs/toolkit/query';

import { baseApi } from '@/shared/api';

import { mapCategory } from '../lib/mapCategory';
import { mapCategoryWithProducts } from '../lib/mapCategoryWithProducts';

import type { Category, CategoryWithProducts } from '../model/types';

import type {
  CategoryDetailsRequestArgs,
  CategoryDto,
  CategoryWithProductsDto,
} from './types';

export const popularCategoriesQuery = async (): Promise<
  QueryReturnValue<
    Category[],
    FetchBaseQueryError,
    FetchBaseQueryMeta | undefined
  >
> => {
  const categories: CategoryDto[] = [
    { id: 33, name: 'string', imageUrl: ['sasdasd'] },
    { id: 334, name: 'string', imageUrl: ['sasdasd'] },
    { id: 335, name: 'string', imageUrl: ['sasdasd'] },
    { id: 336, name: 'string', imageUrl: ['sasdasd'] },
  ];
  try {
    return {
      data: await new Promise<Category[]>((resolve) => {
        setTimeout(() => {
          const mapped = categories.map(mapCategory);
          // reject(new Error('Something went wrong'));
          resolve(mapped);
        }, 1000);
      }),
    };
  } catch (err) {
    return {
      error: {
        status: 500,
        data: (err as Error).message,
      },
    };
  }
};

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    popularCategories: build.query<Category[], void>({
      queryFn: () => popularCategoriesQuery(),
    }),
    categoryDetails: build.query<
      CategoryWithProducts,
      CategoryDetailsRequestArgs
    >({
      query: ({ sortBy, categoryId }) => ({
        url: `/categories/${categoryId}`,
        params: { sortBy, delay: 400 },
      }),
      transformResponse: (response: CategoryWithProductsDto) =>
        mapCategoryWithProducts(response),
    }),
  }),
});

export const { usePopularCategoriesQuery, useCategoryDetailsQuery } =
  categoryApi;
