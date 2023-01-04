import React from 'react';

export default function Button({ children: description, ...otherProps }) {
  return (
    <button
      className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
      {...otherProps}
    >
      {description}
    </button>
  );
}
