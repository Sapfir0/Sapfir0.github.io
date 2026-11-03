import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FestivalIcon from '@mui/icons-material/Festival';
import { Chip } from '@mui/material';
import type { TFilter } from '../types.ts';
import { TagFilter } from '../const.ts';
import { TAGS } from '../services/filter-services.tsx';

const chipStyles = { position: 'absolute', marginLeft: '5px', marginTop: '5px' };

type TChipProps = {
  onClick: (filter: TFilter) => void;
  selected: boolean;
};

export const TentChip = ({ onClick, selected }: TChipProps) => (
  <Chip
    sx={chipStyles}
    icon={<FestivalIcon />}
    label={TagFilter.WithTent}
    color="success"
    onClick={() => onClick(TAGS[TagFilter.WithTent])}
    onDelete={selected ? () => onClick(TAGS[TagFilter.WithTent]) : undefined}
  />
);

export const RunChip = ({ onClick, selected }: TChipProps) => (
  <Chip
    sx={chipStyles}
    icon={<DirectionsRunIcon />}
    label={TagFilter.Running}
    color="primary"
    onClick={() => onClick(TAGS[TagFilter.Running])}
    onDelete={selected ? () => onClick(TAGS[TagFilter.Running]) : undefined}
  />
);
