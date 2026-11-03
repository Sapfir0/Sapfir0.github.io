import { Country } from '../../const.ts';
import { type TDay, type TTrekking } from '../../types.ts';

// 42.55 + 38.2
// 2831 + 2364

const perDays: TDay[] = [
  {
    distance: 3.38,
    accent: 574,
    descent: 10,
    minElevation: 1653,
    maxElevation: 2233,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646272'
  },
  {
    distance: 15.42,
    accent: 1136,
    descent: 965,
    minElevation: 2173,
    maxElevation: 3005,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646460'
  },
  {
    distance: 11.47,
    accent: 983,
    descent: 824,
    minElevation: 2379,
    maxElevation: 2914,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646639'
  },
  {
    distance: 11.68,
    accent: 191,
    descent: 1027,
    minElevation: 1769,
    maxElevation: 2639,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646763'
  },
  {
    distance: 9.1,
    accent: 841,
    descent: 45,
    minElevation: 1972,
    maxElevation: 2802,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19758646855'
  },
  {
    distance: 12.67,
    accent: 170,
    descent: 1250,
    minElevation: 1665,
    maxElevation: 2875,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19727508093'
  },
  {
    distance: 5.82,
    accent: 1760,
    descent: 42,
    minElevation: 1760,
    maxElevation: 2853,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19727510243'
  },
  {
    distance: 9.81,
    accent: 307,
    descent: 1145,
    minElevation: 1967,
    maxElevation: 2978,
    image: '',
    description: '',
    link: 'https://connect.garmin.com/app/activity/19727931546'
  }
];

export const arhyzTrip: TTrekking = {
  name: 'Arhyz passages',
  distance: perDays.reduce((fullDistance, day) => fullDistance + day.distance, 0),
  accent: perDays.reduce((fullAccent, day) => fullAccent + day.accent, 0),
  description: 'Поход',
  country: Country.Russia,
  district: 'Kabardino-Balkaria',
  mountainSystem: 'Caucasus, Arhyz',
  image: '/trekking/arhyz.jpeg',
  days: perDays,
  link: 'arhyz',
  temperature: [5, 24],
  date: new Date(2026, 6),
  withTent: true
};
