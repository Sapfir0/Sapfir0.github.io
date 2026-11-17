import { Country, EasyPublicTransportation, InternetAvailability } from '../../lib/constants.ts';
import { type THiking } from '../../lib/types.ts';

export const russianHikes: THiking[] = [
  {
    slug: 'orekhovo-winter',
    name: 'Orekhovo at winter',
    distance: 22.82,
    ascent: 219,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad oblast',
    externalLink: 'https://www.wikiloc.com/hiking-trails/orechovo-circle-kruzhok-cherez-polianu-pkt-252718926',
    description: '',
    image: '/hiking/leningrad-oblast/orekhovo.jpg',
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: -3.9,
    date: '2024-12-01',
    trackLink: '/hiking/leningrad-oblast/orechovo-circle-kruzhok-cherez-polianu-pkt.gpx'
  },
  {
    slug: 'petajarvi-lakes',
    name: 'Lakes near Petäjärvi',
    distance: 23.21,
    ascent: 219,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad oblast',
    externalLink:
      'https://www.wikiloc.com/hiking-trails/pettarvi-circle-petiaiarvi-i-ozera-berestianoe-i-dubovoe-253927160',
    description: '',
    image: '/hiking/leningrad-oblast/petaarvi.jpg',
    withTent: true,
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 4.4,
    date: '2025-03-01',
    trackLink: '/hiking/leningrad-oblast/pettarvi-circle-petiaiarvi-i-ozera-berestianoe-i-dubovoe.gpx'
  },
  {
    slug: 'kapeasalmi-kuznechnoe',
    name: 'From Kapeasalmi to Kuznechnoe by Ladoga lake shore',
    distance: 25.8,
    ascent: 95,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad oblast',
    externalLink: 'https://www.wikiloc.com/hiking-trails/kapeasalmi-to-kuznechnoe-len-oblast-251923715',
    description: '',
    image: '/hiking/leningrad-oblast/kapeaasalmi.jpg',
    withTent: true,
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 16.8,
    date: '2025-06-01',
    trackLink: '/hiking/leningrad-oblast/kapeasalmi-to-kuznechnoe-len-oblast.gpx'
  },
  {
    slug: 'yastrebinoe-lake',
    name: 'Yastrebinoe lake',
    distance: 47,
    ascent: 395,
    region: 'Russia',
    country: Country.Russia,
    district: 'Leningrad Oblast',
    externalLink: 'https://www.wikiloc.com/hiking-trails/yastrebinoe-lake-hike-249988191',
    description: '',
    image: '/hiking/leningrad-oblast/yastrebinoe.jpg',
    withTent: true,
    internetAvailability: InternetAvailability.NoConnection,
    easyPublicTransportation: EasyPublicTransportation.ByTrain,
    temperature: 17.1,
    date: '2025-08-01',
    trackLink: '/hiking/leningrad-oblast/yastrebinoe-lake-hike.gpx'
  }
];
