import { ComponentProps } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { Search, Map, useChipList, ChipList } from '@src/shared/ui';

import { Place } from '@src/entities/place';

import { ServiceCard } from './ServiceCard';

enum Views {
  MAP = 'map',
  LIST = 'list',
}

interface Props {
  places: Place[];
}

export const Catalog = ({ places }: Props) => {
  const dataViews = useChipList({
    items: [
      { name: 'Подивитися списком', value: Views.LIST },
      { name: 'Подивитися на мапі', value: Views.MAP },
    ],
    defaultValue: Views.LIST,
  });

  const markers: ComponentProps<typeof Map>['markers'] = places.map(
    (place) => ({
      position: place.coordinates,
      popup: (
        <ul key={place.id}>
          {place.name} ({place.address})
          {place.services.map((service) => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      ),
    }),
  );

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction="row" justifyContent="space-between">
        <Search onSearch={(value) => console.log('value', value)} />
        <ChipList {...dataViews} />
      </Stack>
      {dataViews.selected === Views.MAP ? (
        <Map center={markers[0].position} markers={markers} />
      ) : (
        <Grid container spacing={2}>
          {places.map((place) => {
            return place.services.map((service, idx) => (
              <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
                <ServiceCard place={place} service={service} />
              </Grid>
            ));
          })}
        </Grid>
      )}
    </Stack>
  );
};
