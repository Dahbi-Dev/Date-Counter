import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const dateA = 2024
  const [dateB, setDateB] = useState(0)
  

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="App" style={{ padding: "20px" ,fontFamily:'sans-serif'}}>
      <div>
        <input  type="range" min="0" max="10" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((p) => p - step)}>-</button>
        <input type="text" value={count} onChange={((e)=> setCount(Number(e.target.value)))} />
        <button onClick={() => setCount(count + step)}>+</button>
      </div>

      <p style={{}}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
