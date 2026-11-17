import { describe, expect, it } from 'vitest';
import { formatMonthYear } from './formatter.ts';

describe('formatMonthYear', () => {
  it('formats an ISO date as "Mon YYYY"', () => {
    expect(formatMonthYear('2026-11-01')).toBe('Nov 2026');
  });

  it('keeps the year for early dates', () => {
    expect(formatMonthYear('2023-01-15')).toBe('Jan 2023');
  });
});
