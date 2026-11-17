import type { Country, EasyPublicTransportation, InternetAvailability, TagFilter, WildCamp } from './constants.ts';

export type TRegion = 'Europe' | 'Asia' | 'Russia';

export type TFilter<TLabel extends string = TRegion | TagFilter> = {
  label: TLabel;
  filter: (activity: TActivity) => boolean;
  defaultSelected?: boolean;
};

export type TRegionFilter = TFilter<TRegion>;
export type TTagFilter = TFilter<TagFilter>;

export type TDay = {
  distance?: number;
  ascent?: number;
  descent?: number;
  minElevation?: number;
  maxElevation?: number;
  description?: string;
  externalLink?: string;
  trackLink: string;
};

export type TActivity = {
  name: string;
  region: TRegion;
  distance: number;
  country: Country;
  ascent: number;
  externalLink?: string;
  mountainSystem?: string;
  district: string;
  image: string;
  description: string;
  run?: boolean;
  withTent?: boolean;
  highMountains?: boolean;
  internetAvailability: InternetAvailability;
  easyPublicTransportation: EasyPublicTransportation;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  rating?: number;
};

export type TTrekking = {
  /** Internal route path for the trekking details page. */
  slug: string;
  days: TDay[];
  temperature: [number, number];
  wildCamping: WildCamp;
} & TActivity;

export type THiking = {
  temperature: number;
  trackLink?: string;
} & TActivity;

export type TActivityStructure = {
  hiking: THiking[];
  trekking: TTrekking[];
  kayaking: THiking[];
};

export type TGpxData = {
  distance: number;
  ascent: number;
  descent: number;
  elevationMax: number;
  elevationMin: number;
};
