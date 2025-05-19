import { useState } from 'react';

export interface UseChipListProps<Values> {
  items: { name: string; value: Values }[];
  defaultValue: Values;
}

export interface UseChipListReturn<Values> {
  items: { name: string; value: Values }[];
  selected: Values;
  onChange: (value: Values) => void;
}

export const useChipList = <Values>({
  items,
  defaultValue,
}: UseChipListProps<Values>): UseChipListReturn<Values> => {
  const [sortBy, setSortBy] = useState(defaultValue);

  return { items, selected: sortBy, onChange: setSortBy };
};
