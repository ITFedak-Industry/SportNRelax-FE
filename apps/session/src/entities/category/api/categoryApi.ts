import { baseApi } from '../../../shared/api';

import { mapCategoryWithProducts } from '../lib/mapCategoryWithProducts';

import type { Category, CategoryWithProducts } from '../model/types';

import type {
  CategoryDetailsRequestArgs,
  CategoryWithProductsDto,
} from './types';

import { popularCategoriesQuery } from './requests';
import { saveCategory } from './actions';

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    popularCategories: build.query<Category[], void>({
      queryFn: async (_args, { dispatch }) => {
        const response = await popularCategoriesQuery();
        if (response.data) {
          dispatch(saveCategory(response.data));
        }
        return response;
      },
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
