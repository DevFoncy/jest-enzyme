import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div data-test="component-app">
        <h1 data-test='counter-display' >
          The counter is currently &nbsp;
           <span data-test="count">{count}</span>
        </h1>
        <button data-test="increment-button" onClick={() => setCount(count+1)}>Increment counter</button>

      </div>
    </div>
  );
}

export default App;
 