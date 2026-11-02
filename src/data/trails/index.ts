import { Country, type TActivity } from '../../types.ts';
import sestoretsk from './images/sestoretsk-to-zelenogorsk.jpg';
import shchuche from './images/shchuche.jpg';
import inwangsan from './images/inwangsan.jpg';
import kandalaksha from './images/kandalaksha.jpg';

export const trails: TActivity[] = [
  {
    name: 'Inwangsan and Bugaksan mountains',
    distance: 14.84,
    accent: 674,
    country: Country.SouthKorea,
    district: 'Seoul',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/run-inwangsan-and-bugaksan-mountains-263841529',
    description: '',
    image: inwangsan,
    temperature: 26.7,
    date: 'April 2026'
  },
  {
    name: 'Around Haukijärvi lake',
    distance: 21.75,
    accent: 130,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/run-kruzhok-vokrug-ozera-shchuche-259176647',
    description: '',
    image: shchuche,
    temperature: 10.6,
    date: 'Apr. 2026'
  },
  {
    name: 'From Siestarjoki to Zelenogorsk',
    distance: 24.02,
    accent: 43,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    wikiLoc: 'https://www.wikiloc.com/running-trails/run-iz-sestroretska-v-zelenogorsk-256781104',
    description: '',
    image: sestoretsk,
    temperature: 6.7,
    date: 'Mar. 2026'
  },
  {
    name: 'Kandalaksha Trail',
    distance: 14.96,
    accent: 561,
    country: Country.Russia,
    district: 'Murmansk Oblast',
    wikiLoc: 'https://www.wikiloc.com/trail-running-trails/kandalaksha-trail-road-avrora-treil-luch-2026-254512489',
    description: '',
    image: kandalaksha,
    temperature: 3.9,
    date: 'March 2026'
  }
];
