
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount]=useState(0);

  const plusHandler=()=>{
    setCount(count+1);
  }
  const minusHandler=()=>{
    setCount(count-1);
  }

  const resetHandler=()=>{
    setCount(0);
  }
  return (
    <div className="App">
      <div className='head'>Increament & Decreament</div>
      <div className='mid'>
        <button onClick={minusHandler} className='action'>-</button>
        <div className='score'>{count}</div>
        <button onClick={plusHandler} className='action'>+</button>
      </div>
      <button onClick={resetHandler} className='reset'>Reset</button>
    </div>
  );
}

export default App;
