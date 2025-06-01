import { placeHandlers } from '@src/entities/place/api/__mocks__/placeHandlers';
import { serviceHandlers } from '@src/entities/service/api/__mocks__/serviceHandlers';

export const handlers = [...placeHandlers, ...serviceHandlers];
