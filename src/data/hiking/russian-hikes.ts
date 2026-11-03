import { Country } from '../../const.ts';
import { type THiking } from '../../types.ts';

export const russianHikes: THiking[] = [
  {
    name: 'Orekhovo at winter',
    distance: 22.82,
    accent: 219,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/orechovo-circle-kruzhok-cherez-polianu-pkt-252718926',
    description: '',
    image: '/hiking/orekhovo.jpg',
    temperature: -3.9,
    date: new Date(2024, 11) // 'Dec. 2024'
  },
  {
    name: 'Lakes near Petäjärvi',
    distance: 23.21,
    accent: 219,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/pettarvi-circle-petiaiarvi-i-ozera-berestianoe-i-dubovoe-253927160',
    description: '',
    image: '/hiking/petaarvi.jpg',
    withTent: true,
    temperature: 4.4,
    date: new Date(2025, 2) // 'March 2025'
  },
  {
    name: 'From Kapeasalmi to Kuznechnoe by Ladoga lake shore',
    distance: 25.8,
    accent: 95,
    country: Country.Russia,
    district: 'Leningrad oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/kapeasalmi-to-kuznechnoe-len-oblast-251923715',
    description: '',
    image: '/hiking/kapeaasalmi.jpg',
    withTent: true,
    temperature: 16.8,
    date: new Date(2025, 5) // 'June 2025'
  },
  {
    name: 'Yastrebinoe lake',
    distance: 47,
    accent: 395,
    country: Country.Russia,
    district: 'Leningrad Oblast',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/yastrebinoe-lake-hike-249988191',
    description: '',
    image: '/hiking/yastrebinoe.jpg',
    withTent: true,
    temperature: 17.1,
    date: new Date(2025, 7) //'Aug. 2025'
  }
];
