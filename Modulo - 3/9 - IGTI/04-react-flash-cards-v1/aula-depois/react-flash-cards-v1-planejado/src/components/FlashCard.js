import React, { useEffect, useState } from 'react';

export default function FlashCard({
  title = 'Termo',
  description = 'Explicação do termo.',
  showFirst = 'title',
}) {
  // prettier-ignore
  const [showDescription, setShowDescription] = 
    useState(showFirst === 'description');

  useEffect(() => {
    setShowDescription(showFirst === 'description');
  }, [showFirst]);

  function handleClick() {
    setShowDescription(value => !value);
  }

  let data = <div className="text-xl">{title}</div>;

  if (showDescription) {
    const explanationText =
      description.length > 300
        ? description.substring(0, 296) + '...'
        : description;

    data = (
      <div className="text-sm" title={description}>
        {explanationText}
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`rounded shadow-lg 
                hover:bg-gray-100
                  font-semibold
                  w-80 h-48 p-4
                  flex flex-col items-center justify-center 
                  cursor-pointer select-none`}
    >
      {data}
    </div>
  );
}
