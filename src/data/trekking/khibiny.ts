import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../lib/constants.ts';
import { type TDay, type TTrekking } from '../../lib/types.ts';

const days: TDay[] = [
  {
    distance: 12.72,
    ascent: 370,
    descent: 243,
    minElevation: 227,
    maxElevation: 535,
    externalLink: 'https://connect.garmin.com/app/activity/20232327089',
    trackLink: '/trekking/khibiny/day-1.gpx'
  },
  {
    distance: 20.32,
    ascent: 71,
    descent: 280,
    minElevation: 151,
    maxElevation: 363,
    externalLink: 'https://connect.garmin.com/app/activity/20232327324',
    trackLink: '/trekking/khibiny/day-2.gpx'
  },
  {
    distance: 19.07,
    ascent: 387,
    descent: 330,
    minElevation: 145,
    maxElevation: 263,
    externalLink: 'https://connect.garmin.com/app/activity/20232327324',
    trackLink: '/trekking/khibiny/day-3.gpx'
  },
  {
    distance: 16.07,
    ascent: 451,
    descent: 291,
    minElevation: 217,
    maxElevation: 401,
    externalLink: 'https://connect.garmin.com/app/activity/20215810584',
    trackLink: '/trekking/khibiny/day-4.gpx'
  },
  {
    distance: 18.76,
    ascent: 452,
    descent: 565,
    minElevation: 208,
    maxElevation: 723,
    externalLink: 'https://connect.garmin.com/app/activity/20217361844',
    trackLink: '/trekking/khibiny/day-5.gpx'
  },
  {
    distance: 18.0,
    ascent: 284,
    descent: 191,
    minElevation: 266,
    maxElevation: 488,
    externalLink: 'https://connect.garmin.com/app/activity/20217428740',
    trackLink: '/trekking/khibiny/day-6.gpx'
  },
  {
    distance: 3.11,
    ascent: 46,
    descent: 75,
    minElevation: 331,
    maxElevation: 386,
    externalLink: 'https://connect.garmin.com/app/activity/20221274760',
    trackLink: '/trekking/khibiny/day-7.gpx'
  }
];

export const khibinyTrip: TTrekking = {
  slug: 'khibiny',
  name: 'Russian arctic adventure',
  distance: 108,
  ascent: 2061,
  description: 'Поход',
  mountainSystem: 'Khibiny',
  district: 'Murmansk Oblast',
  region: 'Russia',
  country: Country.Russia,
  externalLink: 'https://www.wikiloc.com/hiking-trails/hibini-6-days-krug-po-khibinam-249967556',
  image: '/trekking/khibiny/khibiny.jpeg',
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.ByTrain,
  wildCamping: WildCamp.WildCampAllowed,
  days,
  date: '2026-08-01',
  temperature: [2, 12],
  withTent: true
};
