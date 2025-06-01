import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

import { ApiResponse } from '@src/shared/api';
import { env } from '@src/shared/lib';

import { PlaceDto } from '../types';

import { mockPlaces } from './mockPlaces';

export const placeHandlers = [
  http.get<object, DefaultBodyType, ApiResponse<PlaceDto[]>>(
    `${env.CATALOG_API_ENDPOINT}/places`,
    async () => {
      await delay(env.API_DELAY);

      return HttpResponse.json(
        {
          data: mockPlaces,
        },
        { status: 200 },
      );
    },
  ),
];
