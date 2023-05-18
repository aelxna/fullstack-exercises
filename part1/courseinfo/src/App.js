const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.numExercises}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.course.parts[0].name} numExercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} numExercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} numExercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  let sum = 0;
  props.course.parts.forEach(o => {
    sum += o.exercises;
  })
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div >
  )
}

export default App;