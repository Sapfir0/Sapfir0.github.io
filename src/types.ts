import { type Country, EasyPublicTransportation, InternetAvailability, TagFilter, WildCamp } from './const.ts';

export type TRegion = 'Europe' | 'Asia' | 'Russia';

export type TFilter<TLabel extends string = TRegion | TagFilter> = {
  label: TLabel;
  filter: (data: TActivity) => boolean;
  defaultSelected?: boolean;
};

export type TRegionFilter = TFilter<TRegion>;
export type TTagFilter = TFilter<TagFilter>;

export type TDay = {
  distance?: number;
  accent?: number;
  descent?: number;
  minElevation?: number;
  maxElevation?: number;
  image?: string;
  description?: string;
  link?: string;
  trackLink?: string;
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
  internetAvailability: (typeof InternetAvailability)[keyof typeof InternetAvailability];
  easyPublicTransportation: (typeof EasyPublicTransportation)[keyof typeof EasyPublicTransportation];
  date: Date;
  rating?: number;
  trackLink?: string;
};

export type TTrekking = {
  days: TDay[];
  temperature: [number, number];
  wildCamping: (typeof WildCamp)[keyof typeof WildCamp];
  trackLink: string;
} & TActivity;
export type THiking = { temperature: number } & TActivity;

export type TActivityStructure = {
  trekking: TTrekking[];
  hiking: THiking[];
};

export type TGpxData = {
  distance: number;
  elevationData: Array<[number, number, string]>;
  accent: number;
  descent: number;
  elevationMax: number;
  elevationMin: number;
};
