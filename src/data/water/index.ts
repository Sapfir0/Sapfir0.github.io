import { Country, EasyPublicTransportation, InternetAvailability } from '../../lib/constants.ts';
import type { THiking } from '../../lib/types.ts';

export const water: THiking[] = [
  {
    slug: 'petrovskii-marathon',
    name: 'Marathon of Peter',
    distance: 46.35,
    ascent: 38,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad Oblast',
    description: '',
    image: '/water/petrovskii-marathon.jpg',
    temperature: 17.2,
    easyPublicTransportation: EasyPublicTransportation.ByBus,
    internetAvailability: InternetAvailability.FullCover,
    date: '2025-06-07',
    withTent: false,
    rating: 3,
    externalLink: 'https://www.wikiloc.com/kayaking-canoeing-trails/petrovskii-grebnoi-marafon-249988440',
    trackLink: '/water/petrovskii-grebnoi-marafon.gpx'
  }
];
