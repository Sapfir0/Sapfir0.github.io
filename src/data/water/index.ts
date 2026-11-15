import { Country, EasyPublicTransportation, InternetAvailability } from '../../const.ts';
import type { THiking } from '../../types.ts';

export const water: THiking[] = [
  {
    name: 'Marathon of Peter',
    distance: 46.35,
    accent: 38,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    description: '',
    image: '/water/petrovskii-marathon.jpg',
    temperature: 17.2,
    easyPublicTransportation: EasyPublicTransportation.ByBus,
    internetAvailability: InternetAvailability.FullCover,
    date: new Date(2025, 5, 7),
    withTent: false,
    rating: 3,
    wikiLoc: 'https://www.wikiloc.com/kayaking-canoeing-trails/petrovskii-grebnoi-marafon-249988440'
  }
];
