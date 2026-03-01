import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const Statistic = (props) => {
  return (
    <div>
      {props.name} {props.value} {props.ispercentage? "%" : ""}
    </div>
  )
}
const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (all!=0)? ((good * 1) + (neutral * 0) + (bad * -1)) / all : 0
  const positive = (all!=0)? (good * 100) / all : 0
  const statistics = [
    {name : "good", value : good},
    {name : "neutral", value : neutral},
    {name : "bad", value : bad},
    {name : "all", value : all},
    {name : "average", value : average},
    {name : "positive", value : positive, ispercentage : true}
  ]

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      {all!=0?
      <div>
        <Statistic name={statistics[0].name} value={statistics[0].value} />
        <Statistic name={statistics[1].name} value={statistics[1].value} />
        <Statistic name={statistics[2].name} value={statistics[2].value} />
        <Statistic name={statistics[3].name} value={statistics[3].value} />
        <Statistic name={statistics[4].name} value={statistics[4].value} />
        <Statistic name={statistics[5].name} value={statistics[5].value} />
      </div>
      : "No feedback given"
      }
    </div>
  )
}

export default App