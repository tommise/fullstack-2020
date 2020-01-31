import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ country }) => {
    const [weather, setWeather] = useState('')

    const allLanguages = () =>
        country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)

    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: country.capital
    }

    useEffect(() => {
        axios
            .get('http://api.weatherstack.com/current', { params })
            .then(response => {
                setWeather(response.data)
            })
    }, [params])

    if (weather) {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>

                <h3>Spoken languages</h3>
                <ul>{allLanguages()}</ul>

                <img src={country.flag} alt='country-flag' width="150" />

                <h3>Weather in {country.capital}</h3>
                <p><b>Temperature:</b> {weather.current.temperature} Celsius</p>
                <img src={weather.current.weather_icons} alt="weather-icon" />
                <p><b>Wind: </b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>

            </div>
        )
    } else {
        return (
            <div>
                <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>

                <h3>Spoken languages</h3>
                <ul>{allLanguages()}</ul>

                <img src={country.flag} alt='country-flag' width="150" />
            </div>
        )
    }
}

export default Countries