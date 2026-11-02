import { AsianCountries, EuropeanCountries, Russia, type TFilter } from '../types.ts';

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
export const TAGS = ['High_mountains'];
