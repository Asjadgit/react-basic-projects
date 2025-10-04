import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
     setCount(count + 1);
  }

  function handleDecrement() {
    if(count === 0){
      setCount(0);
      return;
    }
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <h1>Count value : {count}</h1>

        <button onClick={handleIncrement}> Click to increment</button>
        <button onClick={handleDecrement}>Click to decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      
    </>
  )
}

export default App
