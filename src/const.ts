export enum EuropeanCountries {
  Spain = 'Spain',
  Germany = 'Germany'
}

export enum AsianCountries {
  SouthKorea = 'South Korea',
  Laos = 'Laos',
  Kyrgyzstan = 'Kyrgyzstan'
}

export enum Russia {
  Russia = 'Russia'
}

export const Country = { ...EuropeanCountries, ...AsianCountries, ...Russia };

export enum TagFilter {
  HighMountains = 'High mountains',
  Running = 'Run',
  WithTent = 'With tent'
}

export enum InternetAvailability {
  FullCover = 'Full cover',
  UnstableConnection = 'Unstable connection',
  NoConnection = 'No connection'
}

export enum WildCamp {
  WildCampAllowed = 'Wild camp allowed',
  OnlyRefuges = 'Only refuges'
}

export enum EasyPublicTransportation {
  ByBus = 'By bus',
  ByTrain = 'By train',
  PrivateTransfer = 'Private transfer'
}
