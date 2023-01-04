import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { ApiModule } from '../api'

export default function ElectionsPage() {
  const [loadingPage, setLoadingPage] = useState(true)
  const [allCities, setAllCities] = useState([])
  //const [candidates, setCandidates] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [loadingElections, setLoadingElections] = useState(true)
  const [currentElections, setCurrentElections] = useState([])

  useEffect(() => {
    async function getBackendCities() {
      setLoadingPage(true)
      const backendCities = await ApiModule.getAllCities()
      setAllCities(backendCities)
      setSelectedCity(backendCities[0].id)
      setLoadingPage(false)
    }

    getBackendCities()
  }, [])

  useEffect(() => {
    if (!selectedCity) {
      return
    }

    async function getBackendElections() {
      setLoadingElections(true)

      const backendElections = await ApiModule.getElection(selectedCity)
      setCurrentElections(backendElections)

      setLoadingElections(false)
    }

    getBackendElections()
  }, [selectedCity])

  async function handleButtonClick({ currentTarget }) {
    const newSelectedCity = currentTarget.value
    setSelectedCity(newSelectedCity)
  }

  if (loadingPage) {
    return (
      <div className="text-center mt-4">
        <ClipLoader />
      </div>
    )
  }

  const buttonsJsx = (
    <ul className="flex flex-row flex-wrap items-center justify-start">
      {allCities.map(({ id, name }) => {
        const selectedClassName = id === selectedCity ? 'bg-gray-300' : ''

        return (
          <li key={id}>
            <button
              className={`bg-gray-100 p-2 m-2 w-32 hover:bg-gray-200 rounded-md ${selectedClassName}`}
              onClick={handleButtonClick}
              value={id}
            >
              {name}
            </button>
          </li>
        )
      })}
    </ul>
  )

  let electionsJsx = (
    <div className="text-center mt-4">
      <ClipLoader />
    </div>
  )

  if (!loadingElections) {
    const { city, elections } = currentElections
    const { name, votingPopulation, absence, presence } = city
    console.log(elections)

    electionsJsx = (
      <div>
        <h2 className="text-center my-4 text-2xl font-semibold">
          Eleição em {name}
        </h2>

        <p>Total de eleitores: {votingPopulation}</p>
        <p>Abstenção: {absence}</p>
        <p>Votos válidos: {presence}</p>

        <ul className="flex flex-row flex-wrap items-center justify-center mt-4">
          {elections.map((item, index) => {
            const { id, name: candidateName, username, votes } = item
            const isElected = index === 0

            return (
              <li
                className="m-2 w-48 h-48 shadow-lg flex flex-col items-center justify-between p-4 hover:bg-gray-50"
                key={id}
              >
                <div className="flex flex-row items-center justify-between w-full px-2">
                  <img
                    className="rounded-full w-12"
                    src={`/img/${username}.png`}
                    alt={candidateName}
                  />

                  <div className="flex flex-col items-center">
                    <span>{votes}</span>
                    <span>{((votes / presence) * 100).toFixed(2)}%</span>
                  </div>
                </div>

                <div>{candidateName}</div>

                <div>{isElected ? 'Eleito' : 'Não eleito'}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <>
      {buttonsJsx}
      {electionsJsx}
    </>
  )
}
