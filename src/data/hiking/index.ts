import { Country } from '../../const.ts';
import { russianHikes } from './russian-hikes.ts';
import { type THiking } from '../../types.ts';
import cv78 from './images/cv78.jpeg';
import hallasan from './images/hallasan.jpeg';
import laos from './images/laos.jpeg';
import montesa from './images/montesa.jpeg';
import jerica from './images/jerica.jpg';
import segart from './images/mola-de-segart.jpeg';
import sary from './images/sary.jpeg';

export const hiking: THiking[] = [
  {
    name: 'Mola de Segart',
    distance: 9.88,
    accent: 455,
    country: Country.Spain,
    district: 'Valencia',
    description: '',
    image: segart,
    temperature: 21.1,
    date: new Date(2026, 10, 1)
  },
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
    date: new Date(2026, 9, 19)
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
    date: new Date(2026, 9, 9)
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
    date: new Date(2026, 8, 10)
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
    date: new Date(2026, 3)
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
    date: new Date(2025, 11)
  },
  {
    name: 'Sary-Chelek | Six Lakes trail',
    distance: 10.11,
    accent: 672,
    country: Country.Kyrgyzstan,
    district: 'Western Tien Shan Mountains',
    description: '',
    image: sary,
    temperature: 21,
    date: new Date(2023, 8)
  },
  ...russianHikes
] as const;
