const fs = require('fs').promises;
const uuid = require('uuid').v4;

const CITY_NAMES = [
  'Asgard',
  'Gotham',
  'Metropolis',
  'Smallville',
  'Themyscira',
];

const CANDIDATE_NAMES = [
  'Antman',
  'Aquaman',
  'Batman',
  'BlackWidow',
  'CaptainAmerica',
  'CaptainMarvel',
  'Flash',
  'GreenLantern',
  'IronMan',
  'SpiderMan',
  'Superman',
  'Thor',
  'WonderWoman',
];

/**
 * Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function start() {
  const candidates = [];
  const cities = [];
  const election = [];

  for (const candidate of CANDIDATE_NAMES) {
    candidates.push({
      id: uuid(),
      name: candidate,
      username: candidate.toLowerCase(),
    });
  }

  for (const city of CITY_NAMES) {
    const votingPopulation = getRandomNumber(1_000_000, 2_000_000);

    // prettier-ignore
    const absence = 
      Math.floor((votingPopulation * getRandomNumber(5, 10)) / 100);

    const presence = votingPopulation - absence;

    cities.push({
      id: uuid(),
      name: city,
      votingPopulation,
      absence,
      presence,
    });
  }

  for (const city of cities) {
    let remainingVotes = city.presence;

    for (const candidate of candidates) {
      const willRunElection = getRandomNumber(1, 2) === 2;

      if (!willRunElection) {
        continue;
      }

      const percentage = getRandomNumber(10, 20) / 100;
      const votes = Math.floor(remainingVotes * percentage);
      remainingVotes -= Math.max(0, votes);

      election.push({
        id: uuid(),
        cityId: city.id,
        candidateId: candidate.id,
        votes,
      });
    }

    election[election.length - 1].votes += remainingVotes;

    // cities.push({
    //   id: uuid(),
    //   city: { name: city, votingPopulation, absence },
    //   candidates,
    // });
  }

  // for (const city of cities) {
  //   console.log(city.city.votingPopulation - city.city.absence);
  //   console.log(city.candidates.reduce((ac, { votes }) => ac + votes, 0));
  // }

  fs.writeFile(
    './elections.json',
    JSON.stringify(
      {
        cities: cities.sort((a, b) => a.id.localeCompare(b.id)),
        candidates: candidates.sort((a, b) => a.id.localeCompare(b.id)),
        election: election.sort((a, b) => a.id.localeCompare(b.id)),
      },
      null,
      2
    )
  );
}

start();
