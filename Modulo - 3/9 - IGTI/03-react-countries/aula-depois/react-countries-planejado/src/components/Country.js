import { helperFormatNumber } from '../helpers/numberHelpers';
import CountryLabel from './CountryLabel';

export default function Country({ children: country }) {
  const { name, capital, region, population, area, flag } = country;

  const populationDensity = population / area;

  return (
    <div className="border p-2 m-2 w-full flex flex-row items-center space-x-2">
      <img className="w-48" src={flag} alt={name} />
      <div className="text-sm flex flex-col space-y-1">
        <CountryLabel title="Nome:" value={name} />
        <CountryLabel title="Capital:" value={capital} />
        <CountryLabel title="Região:" value={region} />

        <CountryLabel
          title="População:"
          value={helperFormatNumber(population)}
        />

        <CountryLabel title="Área:" value={helperFormatNumber(area)} />

        <CountryLabel
          title="Densidade demográfica:"
          value={`${helperFormatNumber(
            populationDensity.toFixed(2)
          )} habitantes/km²`}
        />
      </div>
    </div>
  );
}
