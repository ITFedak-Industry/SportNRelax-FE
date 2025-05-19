import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ServiceCard, useGetServicesQuery } from '@src/entities/service';
import { FilterBy } from '@src/entities/service/ui/FilterBy';
import { SortBy } from '@src/entities/service/ui/SortBy';
import { Search } from '@src/shared/ui/Search/Search';
import { ComponentProps } from 'react';

export function MainPage() {
  const { data } = useGetServicesQuery();

  const sortByItems: ComponentProps<typeof SortBy>['items'] = [
    { name: 'New', value: 'new' },
    { name: 'Price ascending', value: 'asc' },
    { name: 'Price descending', value: 'desc' },
    { name: 'Rating', value: 'rating' },
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
              <SortBy items={sortByItems} defaultValue={sortByItems[0].value} />
            </Stack>
            <Grid container spacing={2}>
              {data.map((service, idx) => (
                <Grid key={idx} size={{ xs: 12, md: 6, lg: 4 }}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
