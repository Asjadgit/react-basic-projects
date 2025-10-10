import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('000000');

  function generateColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    //     16777215 is 0xFFFFFF in decimal → the maximum for a 6 - digit hex color.

    //     .toString(16) converts the number to hexadecimal.

    //      padStart(6, "0") ensures colors like #00ff00 always have 6 digits.
    setColor(randomColor.padStart(6, "0"));
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Color Generator</h1>
      <div
        style={{
          backgroundColor: "#" + color,
          width: "150px",
          height: "150px",
          margin: "20px auto",
          borderRadius: "8px",
        }}
      ></div>
      <h2>#{color}</h2>
      <button onClick={generateColor}>Generate Random Color</button>
    </div>
  );
}

export default App;
