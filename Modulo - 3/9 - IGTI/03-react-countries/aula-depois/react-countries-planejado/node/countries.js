const fs = require('fs').promises;
const uuid = require('uuid').v4;

async function start() {
  // prettier-ignore
  const fullCountries = 
    JSON.parse(await fs.readFile('./full-countries.json', 'utf-8'));

  const mappedCountries = fullCountries.map(
    ({ name, capital, region, population, area, flag }) => ({
      id: uuid(),
      name,
      capital,
      region,
      population,
      area,
      flag,
    })
  );

  fs.writeFile('./countries.json', JSON.stringify(mappedCountries, null, 2));
}

start();
