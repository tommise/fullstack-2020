import React from 'react'

const Header = ({ name }) => {

    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

const Content = ({ parts }) => {

    const contentRows = parts.map((part) => {
        return (<Part key={part.id} name={part.name} exercises={part.exercises} />)
    })

    return (
        <div>
            {contentRows}
        </div>
    )
}

const Part = ({ name, exercises }) => {

    return (
        <div>
            <p> {name} {exercises} </p>
        </div>
    )
}

const Total = ({ parts }) => {

    const sum = parts.reduce((count, part) => {
        return count + part.exercises;
    }, 0)

    return (
        <p><strong>total of exercises {sum}</strong></p>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}


export default Course;