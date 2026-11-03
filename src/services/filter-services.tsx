import { AsianCountries, EuropeanCountries, Russia, TagFilter } from '../const.ts';
import { type TFilter } from '../types.ts';

const EUCountries = Object.values(EuropeanCountries);
const AsiaCountries = Object.values(AsianCountries);

export const REGIONS: TFilter[] = [
  {
    label: 'Europe',
    filter: (hike) => EUCountries.includes(hike.country as EuropeanCountries),
    defaultSelected: true
  },
  {
    label: 'Asia',
    filter: (hike) => AsiaCountries.includes(hike.country as AsianCountries),
    defaultSelected: true
  },
  {
    label: 'Russia',
    filter: (hike) => hike.country === Russia.Russia,
    defaultSelected: true
  }
];

export const TAGS: Record<TagFilter, TFilter> = {
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
