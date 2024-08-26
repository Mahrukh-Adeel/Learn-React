import { useState, useEffect } from 'react'

function App() {
  let [counter, setCounter] = useState (5)
  // let counter=5
  const addValue=()=>{
    console.log('clicked', Math.random())
    setCounter(counter)
    // counter= counter+1
  }
  return (
    <>
      <h1>Heading</h1>
      <h1>Counter valye: 5</h1>
      <button onclick={addValue}
      >Add value {counter}</button>
      <br />
      <button>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
