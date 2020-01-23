import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {

  const osa1 = props.parts[0];
  const osa2 = props.parts[1];
  const osa3 = props.parts[2];

  return (
    <div>
      <Part part = {osa1} />
      <Part part = {osa2} />
      <Part part = {osa3} />
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
      <p> {props.part.name} {props.part.exercises} </p>
    </div>
  )
}

const Total = (props) => {

  const osa1 = props.parts[0];
  const osa2 = props.parts[1];
  const osa3 = props.parts[2];

  return (
    <div>
      <p>Number of exercises {osa1.exercises + osa2.exercises + osa3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))