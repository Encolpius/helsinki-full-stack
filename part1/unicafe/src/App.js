import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  var [good, neutral, bad] = [props.data[0], props.data[1], props.data[2]]
  var total = good + neutral + bad
  var average = (good - bad) / total || 0
  var positive = (good / total) * 100 || 0

  if (total === 0) {
    return (
      <h2>No feedback given</h2>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive + "%"} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => {
    setGood(newValue);
  }

  const setToNeutral = (newValue) => {
    setNeutral(newValue);
  }

  const setToBad = (newValue) => {
    setBad(newValue);
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={() => setToGood(good+1)} text="good"/>
      <Button handleClick={() => setToNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={() => setToBad(bad+1)} text="bad"/>
      <Statistics data={[good, neutral, bad]}/>
    </div>
  )
}

export default App;
