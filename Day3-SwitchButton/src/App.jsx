import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [button,setButton] = useState(0);

  function handleswitch(){
    setButton(prev => (prev === 0 ? 1 : 0)); //get the previous
  }

  return (
    <>
      <h1>Toggle Switch</h1>

      <div
        className={`toggle-container ${button === 1 ? "active" : ""}`}
        onClick={handleswitch}
      >
        <div className="toggle-switch"></div>
      </div>
    </>
  );
}

export default App
