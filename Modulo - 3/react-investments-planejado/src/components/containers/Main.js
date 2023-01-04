import React from 'react';

export default function Main({ children }) {
  return (
    <main>
      <div className="container mx-auto p-4 mb-40">{children}</div>
    </main>
  );
}
