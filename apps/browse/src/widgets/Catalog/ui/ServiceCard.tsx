import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Place } from '../../../entities/place/model/types';

interface Props {
  place: Place;
  service: Place['services'][number];
}

export const ServiceCard: React.FC<Props> = ({ place, service }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={service.images[0]}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {service.price} / {service.duration}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {place.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {place.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>
  );
};
