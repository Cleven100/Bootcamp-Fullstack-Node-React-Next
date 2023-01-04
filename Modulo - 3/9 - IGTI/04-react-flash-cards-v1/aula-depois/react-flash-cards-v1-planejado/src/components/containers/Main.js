import React from 'react';

export default function Main({ children, className, ...otherProps }) {
  return (
    <main className={`mx-auto p-8 ${className}`} {...otherProps}>
      {children}
    </main>
  );
}
