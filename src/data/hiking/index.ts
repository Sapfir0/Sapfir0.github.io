import { russianHikes } from './russian-hikes.ts';
import { Country, type THiking } from '../../types.ts';
import cv78 from './images/cv78.jpeg';
import hallasan from './images/hallasan.jpeg';
import laos from './images/laos.jpeg';
import montesa from './images/montesa.jpeg';
import jerica from './images/jerica.jpg';

export const hiking: THiking[] = [
  {
    name: 'PR-CV 78 | Circle around Xàtiva',
    distance: 15.67,
    accent: 361,
    country: Country.Spain,
    district: 'Valencia',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/pr-cv-78-circle-around-xativa-291886819',
    description: '',
    image: cv78,
    temperature: 18.9,
    date: 'Oct. 2026'
  },
  {
    name: 'Montesa to Enguera',
    distance: 17.13,
    accent: 669,
    district: 'Valencia',
    country: Country.Spain,
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/montesa-to-enguera-293393523',
    description: '',
    image: montesa,
    temperature: 15.0,
    date: 'Oct. 2026'
  },
  {
    name: 'Jérica Hiking',
    distance: 10.54,
    accent: 384,
    district: 'Valencia',
    country: Country.Spain,
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/jerica-hiking-293392303',
    description: '',
    image: jerica,
    temperature: 27.2,
    date: 'Sep. 2026'
  },
  {
    name: 'Hallasan mountain - Seongpanak to Gwaneumsa',
    distance: 19.51,
    accent: 1263,
    country: Country.SouthKorea,
    district: 'Jeju',
    wikiLoc: 'https://es.wikiloc.com/rutas-carrera-por-montana/run-inwangsan-and-bugaksan-mountains-263841529',
    description: '',
    image: hallasan,
    temperature: 15.6,
    date: 'Apr. 2026'
  },
  {
    name: 'Two viewpoints in Vang Vieng | Silver Cliff, Pha Nguen',
    distance: 13.62,
    accent: 536,
    country: Country.Laos,
    district: 'Vang Vieng',
    wikiLoc: 'https://www.wikiloc.com/hiking-trails/two-viewpoints-in-vang-vieng-251679232',
    description: '',
    image: laos,
    temperature: 24.4,
    date: 'Dec. 2025'
  },
  ...russianHikes
] as const;
