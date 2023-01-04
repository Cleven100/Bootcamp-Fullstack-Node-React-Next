export default function CountryLabel({ title = 'Título:', value = 'Valor' }) {
  return (
    <span>
      <strong>{title}</strong> <span>{value}</span>
    </span>
  );
}
