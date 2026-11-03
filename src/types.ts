import { type Country, TagFilter } from './const.ts';

export type TFilter = {
  label: TagFilter;
  filter: (data: TActivity) => boolean;
  defaultSelected?: boolean;
};

export type TDay = {
  distance: number;
  accent: number;
  descent: number;
  minElevation: number;
  maxElevation: number;
  image?: string;
  description?: string;
  link?: string;
};

export type TActivity = {
  name: string;
  distance: number;
  country: (typeof Country)[keyof typeof Country];
  accent: number;
  wikiLoc?: string;
  mountainSystem?: string;
  district: string;
  region?: string;
  image: string;
  description: string;
  link?: string;
  run?: boolean;
  withTent?: boolean;
  date: Date;
};

export type TTrekking = { days: TDay[]; temperature: [number, number] } & TActivity;
export type THiking = { temperature: number } & TActivity;

export type TActivityStructure = {
  trekking: TTrekking[];
  hiking: THiking[];
};
