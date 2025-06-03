import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

import { ApiResponse } from '@src/shared/api';
import { env } from '@src/shared/lib';

import { Session } from '../../model/types';

import { mockSessions } from './mockSessions';

export const sessionHandlers = [
  http.get<object, DefaultBodyType, ApiResponse<Session[]>>(
    `${env.SESSION_API_ENDPOINT}/services/:id`,
    async () => {
      await delay(env.API_DELAY);

      return HttpResponse.json(
        {
          data: mockSessions,
        },
        { status: 200 },
      );
    },
  ),
];
