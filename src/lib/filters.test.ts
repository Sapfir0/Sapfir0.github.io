import { describe, expect, it } from 'vitest';
import { Country, EasyPublicTransportation, InternetAvailability, TagFilter } from './constants.ts';
import { INITIAL_REGIONS, REGIONS, TAGS } from './filters.ts';
import type { TActivity } from './types.ts';

function createActivity(overrides: Partial<TActivity> = {}): TActivity {
  return {
    name: 'Test activity',
    region: 'Europe',
    distance: 10,
    country: Country.Spain,
    ascent: 100,
    district: 'Test District',
    image: '/test.jpg',
    description: '',
    internetAvailability: InternetAvailability.FullCover,
    easyPublicTransportation: EasyPublicTransportation.ByBus,
    date: '2026-01-01',
    ...overrides
  };
}

describe('REGIONS', () => {
  const europe = createActivity({ region: 'Europe' });
  const asia = createActivity({ region: 'Asia', country: Country.SouthKorea });
  const russia = createActivity({ region: 'Russia', country: Country.Russia });

  it('matches activities by their region field', () => {
    for (const region of REGIONS) {
      expect(region.filter(europe)).toBe(region.label === 'Europe');
      expect(region.filter(asia)).toBe(region.label === 'Asia');
      expect(region.filter(russia)).toBe(region.label === 'Russia');
    }
  });
});

describe('TAGS', () => {
  it('filters by high mountains flag', () => {
    expect(TAGS[TagFilter.HighMountains].filter(createActivity({ highMountains: true }))).toBe(true);
    expect(TAGS[TagFilter.HighMountains].filter(createActivity())).toBe(false);
  });

  it('filters by tent flag', () => {
    expect(TAGS[TagFilter.WithTent].filter(createActivity({ withTent: true }))).toBe(true);
    expect(TAGS[TagFilter.WithTent].filter(createActivity({ withTent: false }))).toBe(false);
  });

  it('filters by run flag', () => {
    expect(TAGS[TagFilter.Running].filter(createActivity({ run: true }))).toBe(true);
    expect(TAGS[TagFilter.Running].filter(createActivity({ run: false }))).toBe(false);
  });
});
