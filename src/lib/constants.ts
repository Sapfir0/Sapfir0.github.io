export const Country = {
  Spain: 'Spain',
  Germany: 'Germany',
  SouthKorea: 'South Korea',
  Laos: 'Laos',
  Kyrgyzstan: 'Kyrgyzstan',
  Russia: 'Russia'
} as const;
export type Country = (typeof Country)[keyof typeof Country];

export const TagFilter = {
  HighMountains: 'High mountains',
  Running: 'Run',
  WithTent: 'With tent'
} as const;
export type TagFilter = (typeof TagFilter)[keyof typeof TagFilter];

export const InternetAvailability = {
  FullCover: 'Full cover',
  UnstableConnection: 'Unstable connection',
  NoConnection: 'No connection'
} as const;
export type InternetAvailability = (typeof InternetAvailability)[keyof typeof InternetAvailability];

export const WildCamp = {
  WildCampAllowed: 'Wild camp allowed',
  OnlyRefuges: 'Only refuges'
} as const;
export type WildCamp = (typeof WildCamp)[keyof typeof WildCamp];

export const EasyPublicTransportation = {
  ByBus: 'By bus',
  ByTrain: 'By train',
  PrivateTransfer: 'Private transfer'
} as const;
export type EasyPublicTransportation = (typeof EasyPublicTransportation)[keyof typeof EasyPublicTransportation];

export const MAIN_APP_ROUTES = {
  Main: '/',
  AboutMe: '/about-me'
} as const;

export const ACTIVITY_TAB_LABELS = {
  hiking: 'Hiking',
  trekking: 'Trekking',
  kayaking: 'Kayaking'
} as const;
