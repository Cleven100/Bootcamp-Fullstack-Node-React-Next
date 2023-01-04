import { useState } from 'react';
import Countries from './components/Countries';
import Country from './components/Country';

import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';

import { ALL_COUNTRIES } from './data/countries';

export default function App() {
  const [countryFilter, setCountryFilter] = useState('');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const filteredCountries =
    countryFilter.trim().length < 3
      ? ALL_COUNTRIES
      : ALL_COUNTRIES.filter(({ name }) =>
          name.toLocaleLowerCase().includes(countryFilter.toLocaleLowerCase())
        );

  return (
    <div>
      <Header>react-countries</Header>

      <Main>
        <TextInput
          labelDescription="Filtro por nome (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
        />

        <h3 className="font-semibold text-center text-xl my-4">
          {filteredCountries.length} país(es) encontrado(s)
        </h3>

        <Countries>
          {filteredCountries.map(country => (
            <Country key={country.id}>{country}</Country>
          ))}
        </Countries>
      </Main>
    </div>
  );
}
