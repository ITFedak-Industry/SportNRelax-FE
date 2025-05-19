import { ComponentProps } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { Search, Map, useChipList, ChipList } from '@src/shared/ui';

import {
  useGetServicesQuery,
  ServiceCard,
  FilterBy,
} from '@src/entities/service';

enum Views {
  MAP = 'map',
  LIST = 'list',
}

export function MainPage() {
  const { data } = useGetServicesQuery();

  const dataViews = useChipList({
    items: [
      { name: 'Подивитися списком', value: Views.LIST },
      { name: 'Подивитися на мапі', value: Views.MAP },
    ],
    defaultValue: Views.LIST,
  });

  const markers: ComponentProps<typeof Map>['markers'] = [
    {
      position: [51.505, -0.09],
      popup: 'A pretty CSS3 popup. <br /> Easily customizable.',
    },
  ];

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={4} maxWidth={250}>
          <FilterBy />
        </Grid>
        <Grid size="grow">
          <Stack spacing={2}>
            <Stack spacing={2} direction="row" justifyContent="space-between">
              <Search onSearch={(value) => console.log('value', value)} />
              <ChipList {...dataViews} />
            </Stack>
            {dataViews.selected === Views.MAP ? (
              <Map markers={markers} />
            ) : (
              <Grid container spacing={2}>
                {data.map((service, idx) => (
                  <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
                    <ServiceCard service={service} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
