import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';

import { UseChipListReturn } from './useChipList';

export const ChipList = <Values,>({
  items,
  selected,
  onChange,
}: UseChipListReturn<Values>) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {items.map(({ name, value }) => {
        const isSelected = selected === value;
        return (
          <Chip
            key={value as React.Key}
            sx={{ borderRadius: '5px' }}
            icon={
              <span style={{ visibility: isSelected ? 'visible' : 'hidden' }}>
                <DoneIcon />
              </span>
            }
            label={name}
            onClick={() => onChange(value)}
            variant={isSelected ? 'filled' : 'outlined'}
          />
        );
      })}
    </Stack>
  );
};
