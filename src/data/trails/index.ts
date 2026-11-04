import { Country, EasyPublicTransportation, InternetAvailability } from '../../const.ts';
import { type THiking } from '../../types.ts';

export const trails: THiking[] = [
  {
    name: 'Inwangsan and Bugaksan mountains',
    distance: 14.84,
    accent: 674,
    country: Country.SouthKorea,
    district: 'Seoul',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/run-inwangsan-and-bugaksan-mountains-263841529',
    description: '',
    image: '/trails/inwangsan.jpg',
    internetAvailability: InternetAvailability.FullCover,
    temperature: 26.7,
    date: new Date(2026, 3)
  },
  {
    name: 'Around Haukijärvi lake',
    distance: 21.75,
    accent: 130,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/run-kruzhok-vokrug-ozera-shchuche-259176647',
    description: '',
    image: '/trails/shchuche.jpg',
    internetAvailability: InternetAvailability.UnstableConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 10.6,
    date: new Date(2026, 3) // 'Apr. 2026'
  },
  {
    name: 'From Siestarjoki to Zelenogorsk',
    distance: 24.02,
    accent: 43,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    wikiLoc: 'https://www.wikiloc.com/running-trails/run-iz-sestroretska-v-zelenogorsk-256781104',
    description: '',
    image: '/trails/sestoretsk-to-zelenogorsk.jpg',
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 6.7,
    date: new Date(2026, 2) // 'Mar. 2026'
  },
  {
    name: 'Kandalaksha Trail',
    distance: 14.96,
    accent: 561,
    country: Country.Russia,
    district: 'Murmansk Oblast',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/kandalaksha-trail-road-avrora-treil-luch-2026-254512489',
    description: '',
    image: '/trails/kandalaksha.jpg',
    internetAvailability: InternetAvailability.UnstableConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 3.9,
    date: new Date(2026, 2) // 'March 2026'
  }
];
