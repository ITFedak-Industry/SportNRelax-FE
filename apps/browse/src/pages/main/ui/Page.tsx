import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useGetPlacesQuery } from '@src/entities/place';

import { Catalog, FilterBy } from '@src/widgets/Catalog';

export function MainPage() {
  const { data } = useGetPlacesQuery();

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
          <Catalog places={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
