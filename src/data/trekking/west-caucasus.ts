import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../const.ts';
import { type TDay, type TTrekking } from '../../types.ts';

// 42.55 + 38.2
// 2831 + 2364

const days: TDay[] = [
  {
    distance: 12.24,
    accent: 115,
    descent: 36,
    minElevation: 284,
    maxElevation: 393,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646272'
  },
  {
    distance: 12.75,
    accent: 584,
    descent: 141,
    minElevation: 405,
    maxElevation: 960,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646460'
  },
  {
    distance: 7.77,
    accent: 776,
    descent: 172,
    minElevation: 898,
    maxElevation: 1679,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/17500614232'
  },
  {
    distance: 18.67,
    accent: 191,
    descent: 1175,
    minElevation: 615,
    maxElevation: 1687,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/17500623672'
  },
  {
    distance: 17.16,
    accent: 108,
    descent: 397,
    minElevation: 314,
    maxElevation: 641,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/17500614917'
  }
];

export const westCaucasus: TTrekking = {
  name: 'West Caucasus',
  distance: days.reduce((fullDistance, day) => fullDistance + day.distance, 0),
  accent: days.reduce((fullAccent, day) => fullAccent + day.accent, 0),
  description: 'Поход',
  country: Country.Russia,
  district: 'Krasnodar Krai',
  mountainSystem: 'Caucasus',
  image: '/trekking/west-caucasus.jpeg',
  days: days,
  wikiLoc:
    'https://www.wikiloc.com/hiking-trails/through-mountains-to-sea-failed-western-caucasus-november-2024-3-days-251925660',
  date: new Date(2024, 10),
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.PrivateTransfer,
  wildCamping: WildCamp.WildCampAllowed,
  temperature: [-5, 10],
  withTent: true
};
