import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';

import { Service } from '@src/entities/service';

interface Props {
  service: Service;
  onBook: () => void;
}

export const ServiceDetails = ({ service, onBook }: Props) => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardMedia
              component="div"
              sx={{ height: 300, backgroundColor: '#eee' }}
              image={service.images[0]}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} sx={{ flexGrow: 1 }}>
          <Typography variant="h5">{service.name}</Typography>
          <Chip label="Tag" color="success" />
          <Typography variant="h4" gutterBottom>
            ${service.price}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {service.description}
          </Typography>

          <Button fullWidth variant="contained" onClick={onBook}>
            Book
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" marginY={4}>
        Additional services
      </Typography>
      <div>
        {service.addons.map((addon) => (
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
      <div>
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
      </div>
    </>
  );
};
