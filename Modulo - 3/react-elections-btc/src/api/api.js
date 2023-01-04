import AxiosModule from 'axios'

const axios = AxiosModule.create({ baseURL: 'http://localhost:3001' })

const CACHE = {}

async function getAllCities() {
  if (CACHE.allCities) {
    console.log('Obtendo municípios do cache')
    return CACHE.allCities
  }

  console.log('Obtendo municípios do backend')
  const { data: cities } = await axios.get('/cities')
  const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name))

  CACHE.allCities = sortedCities
  return sortedCities
}

async function getAllCandidates() {
  if (CACHE.allCandidates) {
    console.log('Obtendo candidatos do cache')
    return CACHE.allCandidates
  }

  const { data: candidates } = await axios.get('/candidates')

  CACHE.allCandidates = candidates
  return candidates
}

async function getElection(cityId) {
  if (CACHE[cityId]) {
    console.log('Obtendo eleições do cache')
    return CACHE[cityId]
  }

  const allCities = await getAllCities()
  const city = allCities.find(city => city.id === cityId)
  const allCandidates = await getAllCandidates()

  const { data: electionData } = await axios.get(`/election?cityId=${cityId}`)

  const finalData = {
    elections: electionData.map(item => {
      const { name, username } = allCandidates.find(
        candidate => candidate.id === item.candidateId
      )

      return { ...item, name, username }
    }),
    city,
  }

  CACHE[cityId] = finalData

  return finalData
}

export { getAllCities, getAllCandidates, getElection }
