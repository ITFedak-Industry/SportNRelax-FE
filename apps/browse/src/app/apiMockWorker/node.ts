import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const server = setupServer(...handlers);
