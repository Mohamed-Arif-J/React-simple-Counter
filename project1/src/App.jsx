import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('incrementor')
  },[count])
  return (
    <div className='wrapper'>
      <h1 className='counter-value'>{count}</h1>
      <div>
      <button onClick={()=>setCount(count+1)}>increment</button>
      <button onClick={()=>setCount(count-1)}>decrement</button>
      <button onClick={()=>setCount(0)}>reset</button></div>
    </div>
  )
}

export default App
