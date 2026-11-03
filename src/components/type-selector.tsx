import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import type { MouseEvent } from 'react';
import type { TFilter } from '../types.ts';

type TTagSelectorProps<T extends TFilter> = {
  tags: T[];
  filters: T[];
  setFilters: (filters: T[]) => void;
  multiple: boolean;
};

export function TagSelector<T extends TFilter>({ multiple, tags, setFilters, filters }: TTagSelectorProps<T>) {
  const handleChange = (_: MouseEvent<HTMLElement>, newTags: T[]) => {
    setFilters(newTags ?? []);
  };

  return (
    <ToggleButtonGroup
      value={filters}
      onChange={handleChange}
      exclusive={!multiple}
      size="small"
      aria-label="Filter activities"
    >
      {tags.map((tag) => (
        <ToggleButton key={tag.label} value={tag}>
          {tag.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
