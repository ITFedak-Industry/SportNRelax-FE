import {
  QueryReturnValue,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';

import { mapCategory } from '../lib/mapCategory';
import { Category } from '../model/types';

import { CategoryDto } from './types';

export const popularCategoriesQuery = async (): Promise<
  QueryReturnValue<
    Category[],
    FetchBaseQueryError,
    FetchBaseQueryMeta | undefined
  >
> => {
  console.log('Fetching categories...');
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
