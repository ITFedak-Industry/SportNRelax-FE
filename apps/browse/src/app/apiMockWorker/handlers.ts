import { placeHandlers } from '@src/entities/place/api/__mocks__/placeHandlers';
import { serviceHandlers } from '@src/entities/service/api/__mocks__/serviceHandlers';
import { sessionHandlers } from '@src/entities/session/api/__mocks__/sessionHandlers';

export const handlers = [
  ...placeHandlers,
  ...serviceHandlers,
  ...sessionHandlers,
];
