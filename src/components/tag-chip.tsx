import { Chip } from '@mui/material';
import type { ReactElement } from 'react';
import type { TagFilter } from '../lib/constants.ts';
import { TAGS } from '../lib/filters.ts';
import type { TTagFilter } from '../lib/types.ts';

const chipStyles = { position: 'absolute', marginLeft: '5px', marginTop: '5px', zIndex: 1 };

type TTagChipProps = {
  tag: TagFilter;
  icon: ReactElement;
  color: 'primary' | 'success';
  selected: boolean;
  onClick: (filter: TTagFilter) => void;
};

export function TagChip({ tag, icon, color, selected, onClick }: TTagChipProps) {
  const filter = TAGS[tag];

  return (
    <Chip
      sx={chipStyles}
      icon={icon}
      label={filter.label}
      color={color}
      onClick={() => onClick(filter)}
      onDelete={selected ? () => onClick(filter) : undefined}
    />
  );
}
