import { env } from '../lib/env';

import { HttpClient } from './httpClient';

export const catalogHttpClient = new HttpClient(env.CATALOG_API_ENDPOINT);
export const sessionHttpClient = new HttpClient(env.SESSION_API_ENDPOINT);
