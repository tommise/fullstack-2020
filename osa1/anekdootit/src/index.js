import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const MostVoted = ({ anecdotes, points }) => {
    let indexOfMostVoted = 0

    for (let i = 0; i < anecdotes.length; i++) {

        if (points[i] > points[indexOfMostVoted]) {
            indexOfMostVoted = i
        }
    }

    return (
        <div>
            <p>{anecdotes[indexOfMostVoted]}</p>
            <p>jolla on {points[indexOfMostVoted]} ääntä.</p>
        </div>
    )

}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
    const copy = [...points]    

    const addAVote = () => {
        copy[selected] += 1
        setPoints(copy)
    }

    return (
        <div>
            <h1>Päivän anekdootti</h1>

            <p>{props.anecdotes[selected]}</p>
            <p>Tällä anekdootilla on {points[selected]} ääntä.</p>
            <Button handleClick={() => addAVote()} text="Äänestä" />
            <Button handleClick={() => setSelected(Math.floor((Math.random() * anecdotes.length)))} text="Seuraava anekdootti" />

            <h1>Eniten ääniä saanut anekdootti</h1>

            <MostVoted anecdotes={props.anecdotes} points={points} />

        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)