import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../lib/constants.ts';
import { type TDay, type TTrekking } from '../../lib/types.ts';

const perDays: TDay[] = [
  {
    externalLink: 'https://connect.garmin.com/app/activity/19758646272',
    trackLink: '/trekking/arhyz/arhyz-2025-1.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19758646460',
    trackLink: '/trekking/arhyz/arhyz-2025-2.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19758646639',
    trackLink: '/trekking/arhyz/arhyz-2025-3.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19758646763',
    trackLink: '/trekking/arhyz/arhyz-2025-4.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19758646855',
    trackLink: '/trekking/arhyz/arhyz-2025-5.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19727508093',
    trackLink: '/trekking/arhyz/arhyz-2025-6.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19727510243',
    trackLink: '/trekking/arhyz/arhyz-2025-7.gpx'
  },
  {
    externalLink: 'https://connect.garmin.com/app/activity/19727931546',
    trackLink: '/trekking/arhyz/arhyz-2025-8.gpx'
  }
];

export const arhyzTrip: TTrekking = {
  slug: 'arhyz',
  name: 'Arhyz passages',
  distance: 87,
  ascent: 5400,
  description: `Маршрут через перевалы Федосеева, Агур, Мылгвал, Чилик. Встретится красивое озеро Кяфар. Маршрут начинается еще в деревне Романтик, оттуда без подъемника можно за полдня добраться до верхних станций, там же бесплатно и ночевать в палатках. Проходил маршрут с командой 9 человек. Снаряжение: палатка, спальник на 0°C в случае похода в июле-августе, подготовленная еда на несколько дней, горелки, газ, треккинговые палки. Веревка пригодилась один раз, на перевале Чилик, но при желании можно обойти. Через 2 недели после нашего подхода снежника уже не было, и все было проходимо без страховки.`,
  region: 'Russia',
  country: Country.Russia,
  district: 'Kabardino-Balkaria',
  mountainSystem: 'Caucasus, Arhyz',
  image: '/trekking/arhyz/arhyz.jpeg',
  days: perDays,
  highMountains: true,
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.PrivateTransfer,
  wildCamping: WildCamp.WildCampAllowed,
  temperature: [5, 24],
  date: '2026-07-01',
  withTent: true
};
