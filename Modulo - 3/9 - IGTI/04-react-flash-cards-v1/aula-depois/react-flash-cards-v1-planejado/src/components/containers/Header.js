export default function Header({
  children = 'Texto padrão',
  className = '',
  ...otherProps
}) {
  return (
    <header className={`bg-gray-100 mx-auto p-4 ${className}`} {...otherProps}>
      {children}
    </header>
  );
}
