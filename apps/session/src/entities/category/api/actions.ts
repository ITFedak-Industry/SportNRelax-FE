import { createAction } from '@reduxjs/toolkit';

import { Category } from '../model/types';

export const saveCategory = createAction<Category[]>('category/saveCategory');
