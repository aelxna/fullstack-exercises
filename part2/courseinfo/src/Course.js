const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <b>Total of {sum} exercises</b>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  const total = parts.reduce((acc, curr) => {
    console.log('what is happening', acc, curr, curr.exercises);
    return acc + curr.exercises;
  }, 0);
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part} />)}
      <Total sum={total} />
    </>
  );
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
}


export default Course;