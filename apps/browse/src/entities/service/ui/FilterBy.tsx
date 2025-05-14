import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const FilterBy: React.FC = () => {
  return (
    <Stack direction="column" spacing={1}>
      <Typography>Keywords</Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="Sport" onDelete={() => null} />
        <Chip label="Health" onDelete={() => null} />
        <Chip label="Yoga" onDelete={() => null} />
      </Stack>

      <FormGroup>
        <FormControlLabel
          sx={{ alignItems: 'flex-start' }}
          control={<Checkbox sx={{ paddingTop: 0 }} />}
          label={
            <div>
              <Typography>Label</Typography>
              <Typography>Description</Typography>
            </div>
          }
        />
        <FormControlLabel
          control={
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={[20, 30]}
              onChange={() => [50, 70]}
              valueLabelDisplay="auto"
              getAriaValueText={() => '[20, 30]'}
            />
          }
          disableTypography
          labelPlacement="top"
          label={
            <Stack
              sx={{ width: '100%' }}
              direction="row"
              justifyContent="space-between"
            >
              <Typography>Label</Typography>
              <Typography>$0-100</Typography>
            </Stack>
          }
        />
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Color</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">Size</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox name="Label" />}
              label="Label"
            />
          </FormGroup>
        </FormControl>
      </FormGroup>
    </Stack>
  );
};
