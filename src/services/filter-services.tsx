import { AsianCountries, EuropeanCountries, Russia, TagFilter } from '../const.ts';
import { type TRegionFilter, type TTagFilter } from '../types.ts';

const EUCountries = Object.values(EuropeanCountries);
const AsiaCountries = Object.values(AsianCountries);

export const REGIONS: TRegionFilter[] = [
  {
    label: 'Europe',
    filter: (hike) => EUCountries.includes(hike.country as EuropeanCountries),
    defaultSelected: true
  },
  {
    label: 'Asia',
    filter: (hike) => AsiaCountries.includes(hike.country as AsianCountries),
    defaultSelected: false
  },
  {
    label: 'Russia',
    filter: (hike) => hike.country === Russia.Russia,
    defaultSelected: false
  }
];

export const INITIAL_REGIONS = REGIONS.filter((region) => region.defaultSelected);

export const TAGS: Record<TagFilter, TTagFilter> = {
  [TagFilter.HighMountains]: {
    label: TagFilter.HighMountains,
    filter: (hike) => hike.mountainSystem === 'Caucasus',
    defaultSelected: false
  },
  [TagFilter.WithTent]: {
    label: TagFilter.WithTent,
    filter: (hike) => Boolean(hike.withTent),
    defaultSelected: false
  },
  [TagFilter.Running]: {
    label: TagFilter.Running,
    filter: (hike) => Boolean(hike.run),
    defaultSelected: false
  }
};
