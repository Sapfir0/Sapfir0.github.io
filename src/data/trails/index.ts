import { Country, EasyPublicTransportation, InternetAvailability } from '../../lib/constants.ts';
import { type THiking } from '../../lib/types.ts';

export const trails: THiking[] = [
  {
    name: 'Inwangsan and Bugaksan mountains',
    distance: 14.84,
    ascent: 674,
    region: 'Asia',
    country: Country.SouthKorea,
    district: 'Seoul',
    externalLink: 'https://www.wikiloc.com/trail-running-trails/run-inwangsan-and-bugaksan-mountains-263841529',
    description: '',
    image: '/trails/inwangsan.jpg',
    internetAvailability: InternetAvailability.FullCover,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 26.7,
    date: '2026-04-01',
    run: true,
    trackLink: '/trails/run-inwangsan-and-bugaksan-mountains.gpx'
  },
  {
    name: 'Around Haukijärvi lake',
    distance: 21.75,
    ascent: 130,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad Oblast',
    externalLink: 'https://www.wikiloc.com/trail-running-trails/run-kruzhok-vokrug-ozera-shchuche-259176647',
    description: '',
    image: '/trails/shchuche.jpg',
    internetAvailability: InternetAvailability.UnstableConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 10.6,
    date: '2026-04-01',
    run: true,
    trackLink: '/trails/run-kruzhok-vokrug-ozera-shchuche.gpx'
  },
  {
    name: 'From Siestarjoki to Zelenogorsk',
    distance: 24.02,
    ascent: 43,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad Oblast',
    externalLink: 'https://www.wikiloc.com/running-trails/run-iz-sestroretska-v-zelenogorsk-256781104',
    description: '',
    image: '/trails/sestoretsk-to-zelenogorsk.jpg',
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 6.7,
    date: '2026-03-01',
    run: true,
    trackLink: '/trails/run-iz-sestroretska-v-zelenogorsk.gpx'
  },
  {
    name: 'Kandalaksha Trail',
    distance: 14.96,
    ascent: 561,
    region: 'Russia',
    country: Country.Russia,
    district: 'Murmansk Oblast',
    externalLink:
      'https://www.wikiloc.com/trail-running-trails/kandalaksha-trail-road-avrora-treil-luch-2026-254512489',
    description: '',
    image: '/trails/kandalaksha.jpg',
    internetAvailability: InternetAvailability.UnstableConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 3.9,
    date: '2026-03-01',
    run: true,
    trackLink: '/trails/kandalaksha-trail-road-avrora-treil-luch-2026.gpx'
  }
];
