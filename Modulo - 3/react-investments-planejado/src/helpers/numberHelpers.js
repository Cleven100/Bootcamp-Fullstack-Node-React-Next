const numberFormatter = new Intl.NumberFormat('pt-br', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const moneyFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export function helperFormatNumber(value) {
  return numberFormatter.format(value);
}

export function helperFormatPercentage(value) {
  const prefix = value > 0 ? '+' : '';
  const sufix = '%';

  const formattedValue = numberFormatter.format(value);

  return `${prefix}${formattedValue}${sufix}`;
}

export function helperFormatMoney(value) {
  return moneyFormatter.format(value);
}
