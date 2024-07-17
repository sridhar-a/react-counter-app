import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + TS</h1>
      <h2>Counter App</h2>
      <h3>{count}</h3>      
        <button className="btn btn-incr" onClick={() => setCount((count) => count - 1)}> Decrement </button>        
        <button className="btn btn-reset" onClick={() => setCount(0)}> Reset </button>        
        <button className="btn btn-decr" onClick={() => setCount((count) => count + 1)}> Increment </button>      
    </>
  );
}

export default App;
