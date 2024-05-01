import { useState } from 'react'   //hooks in react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    setCounter(counter => counter + 1)
  }
  const reduceValue = () => {
    if(counter-1 >=0) 
    setCounter(counter => counter - 1)
  }
  return (
    <>
    <h1>Chai aur code</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <button onClick={reduceValue}>Reduce Value</button>
     </>
  )
}

export default App