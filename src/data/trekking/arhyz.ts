import { Country, EasyPublicTransportation, InternetAvailability, WildCamp } from '../../const.ts';
import { type TDay, type TTrekking } from '../../types.ts';

// 42.55 + 38.2
// 2831 + 2364

const perDays: TDay[] = [
  {
    image: '',
    description:
      'Трек выполнялся в рамках горного похода 1 к.с. по Архызу, поэтому нумерация дней у меня будет сквозная, четвертый день будет последним в этой части и завершится полудневкой. Мой отчет:\n' +
      '\n' +
      'Первое кольцо нашего маршрута началось в Верхнем Архызе и пролегало через перевал Федосеева, Агур и Мылгвал. Приехав в туристическую деревню, пообедав, мы оставили половину заготовленной еды на второе кольцо в местной кафешке, стали подниматься. Подъем в горы был прямо под горнолыжными фуникулерами, поднявшись так 800 метров наверх, организовали палаточную стоянку на месте окончания трассы подъемника &quot;Млечный путь&quot;. Удивительно, но даже после прохождения первого дня у нас еще были блага цивилизации.\n' +
      '\n' +
      'Вечерком начался ежедневный дождь, мы начали готовиться, что он будет идти словно по расписанию около 3 часов дня.\n' +
      '\n' +
      'За 1 день пройдено 3.38 км, 574 м⬆️, 10 м⬇️.\n' +
      '🏔1653 м - 2233м\n' +
      'Всего столько же.',
    link: 'https://connect.garmin.com/app/activity/19758646272',
    trackLink: '/trekking/arhyz/arhyz-2025-1.gpx'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-2.gpx',
    link: 'https://connect.garmin.com/app/activity/19758646460'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-3.gpx',
    link: 'https://connect.garmin.com/app/activity/19758646639'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-4.gpx',
    link: 'https://connect.garmin.com/app/activity/19758646763'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-5.gpx',
    link: 'https://connect.garmin.com/app/activity/19758646855'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-6.gpx',
    link: 'https://connect.garmin.com/app/activity/19727508093'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-7.gpx',
    link: 'https://connect.garmin.com/app/activity/19727510243'
  },
  {
    image: '',
    description: '',
    trackLink: '/trekking/arhyz/arhyz-2025-8.gpx',
    link: 'https://connect.garmin.com/app/activity/19727931546'
  }
];

export const arhyzTrip: TTrekking = {
  name: 'Arhyz passages',
  distance: 87,
  accent: 5400,
  trackLink: '/trekking/arhyz/arhyz-full.gpx',
  description: `Маршрут через перевалы Федосеева, Агур, Мылгвал, Чилик. Встретится красивое озеро Кяфар. Маршрут начинается еще в деревне Романтик, оттуда без подъемника можно за полдня добраться до верхних станций, там же бесплатно и ночевать в палатках. Проходил маршрут с командой 9 человек. Снаряжение: палатка, спальник на 0°C в случае похода в июле-августе, подготовленная еда на несколько дней, горелки, газ, треккинговые палки. Веревка пригодилась один раз, на перевале Чилик, но при желании можно обойти. Через 2 недели после нашего подхода снежника уже не было, и все было проходимо без страховки.`,
  country: Country.Russia,
  district: 'Kabardino-Balkaria',
  mountainSystem: 'Caucasus, Arhyz',
  image: '/trekking/arhyz/arhyz.jpeg',
  days: perDays,
  link: 'arhyz',
  internetAvailability: InternetAvailability.NoConnection,
  easyPublicTransportation: EasyPublicTransportation.PrivateTransfer,
  wildCamping: WildCamp.WildCampAllowed,
  temperature: [5, 24],
  date: new Date(2026, 6),
  withTent: true
};
