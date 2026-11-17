const MONTH_YEAR_FORMAT = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short'
});

export function formatMonthYear(isoDate: string): string {
  return MONTH_YEAR_FORMAT.format(new Date(isoDate));
}
