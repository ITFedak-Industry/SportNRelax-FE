import Container from '@mui/material/Container';

import { Service, useGetServiceByIdQuery } from '@src/entities/service';

interface Props {
  service: Service;
}

export function ServicePage({ service }: Props) {
  const { data = service } = useGetServiceByIdQuery(service.id);

  return <Container>{data.id}</Container>;
}
