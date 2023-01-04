import { useEffect, useState } from 'react';
import Timer from './components/Timer';

function getAgeFrom(birthDate) {
  if (!birthDate) {
    return '?';
  }

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  const age = todayYear - birthYear;

  if (birthMonth > todayMonth) {
    return age - 1;
  }

  if (birthMonth === todayMonth && birthDay > todayDay) {
    return age - 1;
  }

  return age;
}

export default function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [name, setName] = useState('Raphael Gomide');
  const [birthString, setBirthString] = useState('1982-12-22');
  const [birthDate, setBirthDate] = useState(new Date(1982, 11, 22));

  useEffect(() => {
    console.log('useEffect running...');

    document.title = name;
  }, [name]);

  function handleToggleTimer() {
    setShowTimer(currentValue => !currentValue);
  }

  function handleInputChange({ currentTarget }) {
    const newName = currentTarget.value;
    setName(newName);
  }

  function handleDateChange({ currentTarget }) {
    const newDateString = currentTarget.value;
    const newDate = currentTarget.valueAsDate;

    setBirthString(newDateString);
    setBirthDate(newDate);
  }

  const age = getAgeFrom(birthDate);

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">react-hello</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <div className="flex flex-row items-center justify-end space-x-2">
            <input
              id="checkboxTimer"
              type="checkbox"
              value={showTimer}
              onChange={handleToggleTimer}
            />
            <label className="select-none" htmlFor="checkboxTimer">
              Mostrar cronômetro
            </label>
          </div>

          {showTimer && (
            <div className="text-right mt-4">
              <Timer />
            </div>
          )}

          <div className="flex flex-col space-y-2 mb-4">
            <label className="text-sm text-gray-700">Digite o seu nome:</label>
            <input
              className="border border-gray-200 p-1"
              type="text"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col space-y-2 mb-4">
            <label className="text-sm text-gray-700">
              Informe a sua data de nascimento:
            </label>
            <input
              className="border border-gray-200 p-1"
              type="date"
              value={birthString}
              onChange={handleDateChange}
            />
          </div>

          {!name ? (
            <p>Sem um nome, nada posso fazer...</p>
          ) : (
            <p>
              {name}, o seu nome tem {name.length} caracteres e sua idade é de{' '}
              {age} anos.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
