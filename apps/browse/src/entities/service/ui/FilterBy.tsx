import { FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export const FilterBy: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ padding: '16px' }}>
      <form onSubmit={() => {}}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6">Keywords</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {['Sport', 'Health', 'Yoga'].map((label) => (
              <Chip key={label} label={label} onDelete={() => null} />
            ))}
          </Stack>

          <FormControl fullWidth>
            <FormLabel>Price Range</FormLabel>
            <Slider
              value={[20, 30]}
              onChange={(e, newValue) => [50, 70]}
              valueLabelDisplay="auto"
              getAriaValueText={(val) => `$${val}`}
              min={0}
              max={100}
            />
            <Stack direction="row" justifyContent="space-between">
              <Typography>$0</Typography>
              <Typography>$100</Typography>
            </Stack>
          </FormControl>

          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Color</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Red" />
              <FormControlLabel control={<Checkbox />} label="Green" />
              <FormControlLabel control={<Checkbox />} label="Blue" />
            </FormGroup>
          </FormControl>

          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Size</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="S" />
              <FormControlLabel control={<Checkbox />} label="M" />
              <FormControlLabel control={<Checkbox />} label="L" />
            </FormGroup>
          </FormControl>
        </Stack>
      </form>
    </Paper>
  );
};
