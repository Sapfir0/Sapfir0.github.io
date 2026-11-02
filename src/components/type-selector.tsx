import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import type { TFilter } from '../types.ts';

export function TagSelector({
  multiple,
  tags,
  setFilters,
  filters
}: {
  tags: TFilter[];
  setFilters: (filters: TFilter[]) => void;
  filters: TFilter[];
  preselected?: string;
  multiple: boolean;
}) {
  const [selectedTags, setTags] = React.useState<TFilter[]>(filters);

  const handleFormat = (_: React.MouseEvent<HTMLElement>, newTags: TFilter[]) => {
    setTags(newTags);
    setFilters(newTags);
  };

  return (
    <ToggleButtonGroup value={selectedTags} onChange={handleFormat} exclusive={!multiple} aria-label="text alignment">
      {tags.map((tag) => (
        <ToggleButton value={tag}>{tag.label}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
