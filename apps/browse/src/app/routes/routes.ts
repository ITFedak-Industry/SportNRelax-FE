import { type RouteConfig, index } from '@react-router/dev/routes';

async function bootstrap() {
  return [index('./home.tsx')] satisfies RouteConfig;
}

// eslint-disable-next-line import/no-default-export
export default bootstrap();
