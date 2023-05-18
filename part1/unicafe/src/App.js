import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  console.log(text, handleClick);
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const [good, neutral, bad] = props.vals;
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }
  const avg = (good - bad) / (good + bad);
  const pctPos = (good / total) * 100;

  console.log('Good:', good, 'Neutral:', neutral, 'Bad:', bad,
    'Total:', total, 'Avg:', avg, '% Pos:', pctPos);
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total' value={total} />
          <StatisticLine text='Average' value={avg} />
          <StatisticLine text='% Positive' value={pctPos} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback:</h1>
      <div style={{ display: 'inline-block' }}>
        <Button text='Good' handleClick={() => setGood(good + 1)} />
        <Button text='Neutral' handleClick={() => setNeutral(neutral + 1)} />
        <Button text='Bad' handleClick={() => setBad(bad + 1)} />
      </div>
      <br />
      <h1>Statistics</h1>
      <Statistics vals={[good, neutral, bad]} />
    </div>
  )
}

export default App