import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

import { env } from '@src/shared/lib';

import { ServiceDto } from '../types';

export const serviceHandlers = [
  http.get<{ serviceId: string }, DefaultBodyType, { data: ServiceDto[] }>(
    `${env.API_ENDPOINT}/services`,
    async () => {
      await delay(env.API_DELAY);

      return HttpResponse.json(
        {
          data: [{ id: '123' } as ServiceDto],
        },
        { status: 200 },
      );
    },
  ),
];
