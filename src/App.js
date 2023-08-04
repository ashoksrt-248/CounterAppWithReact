import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="buttons">
        <div>
          <h1> {counter}</h1>{" "}
        </div>
        <button
          style={{
            background: "#7ed696",
            borderRadius: "10px",
            width: "100px",
            height: "40px"
          }}
          onClick={increase}
        >
          Increment
        </button>
        <span> </span>
        <button
          style={{
            background: "#c9324e",
            color: "white",
            borderRadius: "10px",
            width: "100px",
            height: "40px"
          }}
          onClick={decrease}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
