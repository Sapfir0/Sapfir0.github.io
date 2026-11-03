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
