import { useCallback, useState } from 'react';
import type { TagFilter } from '../lib/constants.ts';
import { INITIAL_REGIONS } from '../lib/filters.ts';
import type { TRegionFilter, TTagFilter } from '../lib/types.ts';

export function useActivityFilters() {
  const [filtersRegionsList, setFiltersRegionsList] = useState<TRegionFilter[]>(INITIAL_REGIONS);
  const [tagFiltersList, setTagFiltersList] = useState<Partial<Record<TagFilter, TTagFilter>>>({});

  const toggleTag = useCallback((tag: TTagFilter) => {
    setTagFiltersList((prevState) => {
      const nextState = { ...prevState };

      if (tag.label in nextState) {
        delete nextState[tag.label];
      } else {
        nextState[tag.label] = tag;
      }

      return nextState;
    });
  }, []);

  return { filtersRegionsList, setFiltersRegionsList, tagFiltersList, toggleTag };
}
