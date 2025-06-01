import { getServiceById } from '@src/entities/service';
import type { Route } from './+types/service';

import { ServicePage } from '@src/pages/service/ui/Page';

export async function loader({ params }: Route.LoaderArgs) {
  return await getServiceById(params.id);
}

// eslint-disable-next-line import/no-default-export
export default function App({ loaderData: service }: Route.ComponentProps) {
  return <ServicePage service={service} />;
}
