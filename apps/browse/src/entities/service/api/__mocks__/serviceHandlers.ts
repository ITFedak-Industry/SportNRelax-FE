import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

import { ApiResponse } from '@src/shared/api';
import { env } from '@src/shared/lib';

import { Service } from '../../model/types';

import { mockService } from './mockService';

export const serviceHandlers = [
  http.get<{ id: string }, DefaultBodyType, ApiResponse<Service>>(
    `${env.CATALOG_API_ENDPOINT}/services/:id`,
    async ({ params }) => {
      await delay(env.API_DELAY);

      return HttpResponse.json(
        {
          data: { ...mockService, id: params.id },
        },
        { status: 200 },
      );
    },
  ),
];
