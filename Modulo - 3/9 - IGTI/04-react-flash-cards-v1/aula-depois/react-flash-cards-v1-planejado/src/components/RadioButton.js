import React from 'react';
import { serviceGetNewId } from '../services/idService';

export default function RadioButton({
  name = serviceGetNewId(),
  labelDescription = 'Descrição do botão',
  onRadioClick = () => {},
  checked = false,
  value = '',
}) {
  const id = serviceGetNewId();

  return (
    <div className="flex flex-row items-center space-x-2">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={onRadioClick}
      />
      <label htmlFor={id}>{labelDescription}</label>
    </div>
  );
}
