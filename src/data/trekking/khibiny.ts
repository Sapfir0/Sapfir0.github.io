import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../const.ts';
import { type TDay, type TTrekking } from '../../types.ts';

const days: TDay[] = [
  {
    distance: 12.72,
    accent: 370,
    descent: 243,
    minElevation: 227,
    maxElevation: 535,
    link: 'https://connect.garmin.com/app/activity/20232327089',
    trackLink: '/trekking/khibiny/day-1.gpx'
  },
  {
    distance: 20.32,
    accent: 71,
    descent: 280,
    minElevation: 151,
    maxElevation: 363,
    link: 'https://connect.garmin.com/app/activity/20232327324',
    trackLink: '/trekking/khibiny/day-2.gpx'
  },
  {
    distance: 19.07,
    accent: 387,
    descent: 330,
    minElevation: 145,
    maxElevation: 263,
    link: 'https://connect.garmin.com/app/activity/20232327324',
    trackLink: '/trekking/khibiny/day-3.gpx'
  },
  {
    distance: 16.07,
    accent: 451,
    descent: 291,
    minElevation: 217,
    maxElevation: 401,
    link: 'https://connect.garmin.com/app/activity/20215810584',
    trackLink: '/trekking/khibiny/day-4.gpx'
  },
  {
    distance: 18.76,
    accent: 452,
    descent: 565,
    minElevation: 208,
    maxElevation: 723,
    link: 'https://connect.garmin.com/app/activity/20217361844',
    trackLink: '/trekking/khibiny/day-5.gpx'
  },
  {
    distance: 18.0,
    accent: 284,
    descent: 191,
    minElevation: 266,
    maxElevation: 488,
    link: 'https://connect.garmin.com/app/activity/20217428740',
    trackLink: '/trekking/khibiny/day-6.gpx'
  },
  {
    distance: 3.11,
    accent: 46,
    descent: 75,
    minElevation: 331,
    maxElevation: 386,
    link: 'https://connect.garmin.com/app/activity/20221274760',
    trackLink: '/trekking/khibiny/day-7.gpx'
  }
];

// 108.42,
// 333,
export const khibinyTrip: TTrekking = {
  name: 'Russian arctic adventure',
  distance: 108,
  accent: 2061,
  description: 'Поход',
  mountainSystem: 'Khibiny',
  district: 'Murmansk Oblast',
  country: Country.Russia,
  wikiLoc: 'https://www.wikiloc.com/hiking-trails/hibini-6-days-krug-po-khibinam-249967556',
  link: '/khibiny',
  image: '/trekking/khibiny/khibiny.jpeg',
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.ByTrain,
  wildCamping: WildCamp.WildCampAllowed,
  days,
  date: new Date(2026, 7),
  temperature: [2, 12],
  withTent: true
};
