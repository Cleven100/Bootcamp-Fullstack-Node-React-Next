const MONTHS = [
  '',
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

export function helperFormatMonthYear(month, year) {
  return `${MONTHS[month]}/${year}`;
}
