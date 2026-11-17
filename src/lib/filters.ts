import { TagFilter } from './constants.ts';
import type { TRegionFilter, TTagFilter } from './types.ts';

// All regions are selected by default, so every tab starts with content
// visible (each tab holds trips from a different mix of regions).
export const REGIONS: TRegionFilter[] = [
  {
    label: 'Europe',
    filter: (activity) => activity.region === 'Europe',
    defaultSelected: true
  },
  {
    label: 'Asia',
    filter: (activity) => activity.region === 'Asia',
    defaultSelected: true
  },
  {
    label: 'Russia',
    filter: (activity) => activity.region === 'Russia',
    defaultSelected: true
  }
];

export const INITIAL_REGIONS = REGIONS.filter((region) => region.defaultSelected);

export const TAGS: Record<TagFilter, TTagFilter> = {
  [TagFilter.HighMountains]: {
    label: TagFilter.HighMountains,
    filter: (activity) => activity.highMountains === true,
    defaultSelected: false
  },
  [TagFilter.WithTent]: {
    label: TagFilter.WithTent,
    filter: (activity) => activity.withTent === true,
    defaultSelected: false
  },
  [TagFilter.Running]: {
    label: TagFilter.Running,
    filter: (activity) => activity.run === true,
    defaultSelected: false
  }
};
