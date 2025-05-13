import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';

interface Props {
  items: { name: string; value: string }[];
  defaultValue?: string;
}

export const SortBy: React.FC<Props> = ({ items, defaultValue }) => {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <Stack direction="row" spacing={1}>
      {items.map(({ name, value }) => {
        const isSelected = selected === value;
        return (
          <Chip
            key={value}
            sx={{ borderRadius: '5px' }}
            icon={
              <span style={{ visibility: isSelected ? 'visible' : 'hidden' }}>
                <DoneIcon />
              </span>
            }
            label={name}
            onClick={() => setSelected(value)}
            variant={isSelected ? 'filled' : 'outlined'}
          />
        );
      })}
    </Stack>
  );
};
