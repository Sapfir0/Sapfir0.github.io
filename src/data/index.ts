import { kayaking } from './kayaking';
import { hiking } from './hiking';
import { trails } from './trails';
import { khibinyTrip } from './trekking/khibiny.ts';
import { arhyzTrip } from './trekking/arhyz.ts';
import { westCaucasus } from './trekking/west-caucasus.ts';

import type { TActivity, TActivityStructure, THiking } from '../lib/types.ts';

export const activities: TActivityStructure = {
  hiking: [...hiking, ...trails],
  trekking: [arhyzTrip, khibinyTrip, westCaucasus],
  kayaking
};

function isHikingLike(activity: TActivity): activity is THiking {
  return 'trackLink' in activity;
}

export function getTrackLink(activity: TActivity): string | undefined {
  return isHikingLike(activity) ? activity.trackLink : undefined;
}
