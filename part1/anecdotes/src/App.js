import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

  const copiedVotes = [...votes]
  const setToVote = (selected) => setVote(votes.map((item, i) => {
    if (i == selected) {
      return copiedVotes[selected] += 1;
    } else {
      return item;
    }
  }))
  const setToSelected = () => setSelected(Math.floor(Math.random() * (anecdotes.length)));

  const findIndex = () => {
    const highest = Math.max(...copiedVotes)
    return copiedVotes.findIndex(x => x == highest)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {copiedVotes[selected]} votes</p>
      <button onClick={() => setToVote(selected)}>vote</button>
      <button onClick={() => setToSelected()}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[findIndex()]}</p>
      <p>has {copiedVotes[findIndex()]} votes</p>
    </div>
  )
}

export default App
