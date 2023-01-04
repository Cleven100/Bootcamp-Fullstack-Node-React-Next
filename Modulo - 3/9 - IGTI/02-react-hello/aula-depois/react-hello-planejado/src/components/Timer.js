import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value => value + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-blue-200 p-2 text-blue-900 font-semibold">{value}</span>
  );
}
