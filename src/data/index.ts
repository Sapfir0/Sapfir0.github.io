import { hiking } from './hiking';
import { trails } from './trails';
import { khibinyTrip } from './trekking/khibiny.ts';
import { arhyzTrip } from './trekking/arhyz.ts';
import { westCaucasus } from './trekking/west-caucasus.ts';

import type { TActivityStructure } from '../types.ts';

export const trekkingData: TActivityStructure = {
  hiking: [...hiking, ...trails.map((trail) => ({ ...trail, run: true }))],
  trekking: [arhyzTrip, khibinyTrip, westCaucasus]
} as const;
