import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

import { ApiResponse } from '@src/shared/api';
import { env } from '@src/shared/lib';

import { ServiceDto } from '../types';

import { mockServices } from './mockServices';

export const serviceHandlers = [
  http.get<{ serviceId: string }, DefaultBodyType, ApiResponse<ServiceDto[]>>(
    `${env.API_ENDPOINT}/services`,
    async () => {
      await delay(env.API_DELAY);

      return HttpResponse.json(
        {
          data: mockServices,
        },
        { status: 200 },
      );
    },
  ),
];
