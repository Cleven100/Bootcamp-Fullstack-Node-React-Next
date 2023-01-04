const numberFormatter = Intl.NumberFormat('pt-br');

export function helperFormatNumber(value) {
  return numberFormatter.format(value);
}
