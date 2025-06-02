import { Fragment } from 'react/jsx-runtime';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import { Service, useGetServiceByIdQuery } from '@src/entities/service';
import Container from '@mui/material/Container';

interface Props {
  service: Service;
}

export function ServicePage({ service }: Props) {
  const { data = service } = useGetServiceByIdQuery(service.id);

  return (
    <div style={{ padding: 32 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardMedia
              component="div"
              sx={{ height: 300, backgroundColor: '#eee' }}
              image={data.images[0]}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ flexGrow: 1 }}>
          <Typography variant="h5">{data.name}</Typography>
          <Chip label="Tag" color="success" />
          <Typography variant="h4" gutterBottom>
            ${data.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {data.description}
          </Typography>

          <Button fullWidth variant="contained">
            Book
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h6" marginY={4}>
        Additional services
      </Typography>
      <div>
        {data.addons.map((addon) => (
          <Accordion key={addon.name}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                {addon.name} ({addon.price})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{addon.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <Typography variant="h6" marginY={4}>
        Latest reviews
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((_, i) => (
          <Grid key={i} size={{ xs: 12, sm: 4 }}>
            <Card>
              <CardContent>
                <Rating value={3} readOnly />
                <Typography variant="subtitle1">Review title</Typography>
                <Typography variant="body2">Review body</Typography>
                <Grid container alignItems="center" marginTop={2}>
                  <Avatar
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Reviewer name"
                    sx={{ width: 24, height: 24, marginRight: 1 }}
                  />
                  <Typography variant="body2">Reviewer name</Typography>
                  <Typography variant="caption" marginLeft={1}>
                    Date
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" marginTop={6}>
        Follow the latest trends
      </Typography>
      <Typography variant="body2" marginBottom={2}>
        With our daily newsletter
      </Typography>
      <form style={{ display: 'flex', gap: 8, maxWidth: 400 }}>
        <TextField label="Email" type="email" fullWidth />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
