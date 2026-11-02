export enum EuropeanCountries {
  Spain = 'Spain',
  Germany = 'Germany'
}

export enum AsianCountries {
  SouthKorea = 'South Korea',
  Laos = 'Laos'
}

export enum Russia {
  Russia = 'Russia'
}

export const Country = { ...EuropeanCountries, ...AsianCountries, ...Russia };

export type TFilter = {
  label: string;
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
  temperature: number;
  wikiLoc?: string;
  mountainSystem?: string;
  district: string;
  region?: string;
  image: string;
  description: string;
  link?: string;
  run?: boolean;
  withTent?: boolean;
  date: string;
};

export type TTrekking = { days: TDay[] } & TActivity;
export type THiking = {} & TActivity;

export type TActivityStructure = {
  trekking: TTrekking[];
  hiking: THiking[];
  // trails: THiking[]
};
