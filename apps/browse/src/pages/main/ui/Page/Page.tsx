import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { useGetServicesQuery } from '@src/entities/service';

export function MainPage() {
  const { data } = useGetServicesQuery();
  console.log('Main page', data);

  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <Stack spacing={2}>
          <div>Column 1 - Row 1</div>
          <div>Column 1 - Row 2</div>
          <div>Column 1 - Row 3</div>
        </Stack>
      </Grid>
      <Grid size={8}>
        <div>Column 2</div>
      </Grid>
    </Grid>
  )
}
