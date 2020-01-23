import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    const { good, neutral, bad } = props

    const kaikkiPalautteet = good + neutral + bad
    const keskiarvo = (good - bad) / kaikkiPalautteet
    const positiivisiaPalautteita = good / kaikkiPalautteet * 100

    if (kaikkiPalautteet === 0) {
        return (
            <div>
                <p>Palautteita ei ole vielä annettu.</p>
            </div>
        )
    }

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text = "Hyviä" value = {good} />
                    <StatisticLine text = "Neutraaleja" value = {neutral} />
                    <StatisticLine text = "Huonoja" value = {bad} />
                    <StatisticLine text = "Yhteensä" value = {kaikkiPalautteet} />
                    <StatisticLine text = "Keskiarvo" value = {keskiarvo} />
                    <StatisticLine text = "Positiivisia palautteita" value = {positiivisiaPalautteita + " %"} />
                </tbody>
            </table>
        </div>
    )
}

const StatisticLine = ({ text, value}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Asiakaspalaute</h1>

            <Button handleClick={() => setGood(good + 1)} text="Hyvä" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
            <Button handleClick={() => setBad(bad + 1)} text="Huono" />

            <h1>Statistiikka</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)