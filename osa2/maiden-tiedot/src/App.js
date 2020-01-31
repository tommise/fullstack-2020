import React, { useState, useEffect } from 'react'

import Countries from './components/Countries'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    setCountryFilter(event.target.value.toLowerCase())
  }

  const foundCountries = countries.filter(c => c.name.toLowerCase().match(countryFilter))

  const selectCountry = (event) => {
    setCountryFilter(event.target.value.toLowerCase())
  }

  const rows = () => {

    const size = foundCountries.length

    if (size > 10) {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    } if (size === 1) {
      const onlyCountry = foundCountries[0]

      return (
        (<Countries country={onlyCountry} />))

    } else if (size > 1) {
      return foundCountries.map(c =>
        <div key={c.name}>
          {c.name}
          <button value={c.name} onClick={selectCountry}>show</button>
        </div>)

    } else {
      return (
        <div>
          No countries were found with this name
        </div>
      )
    }
  }

  return (
    <div>
      find countries <input value={countryFilter} onChange={handleFilterChange} />

      {rows()}
    </div>
  )

}

export default App;
