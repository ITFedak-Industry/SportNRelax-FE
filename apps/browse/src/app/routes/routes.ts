import { type RouteConfig, index, route } from '@react-router/dev/routes';

async function bootstrap() {
  return [
    index('./home.tsx'),
    route('/services/:id', './service.tsx'),
  ] satisfies RouteConfig;
}

// eslint-disable-next-line import/no-default-export
export default bootstrap();
