import { useState } from 'react'
import HookUseCallback from './components/hookUseCallback'
import './App.css'


function App() {

  const [count, setCount]  = useState(0)
  const msg = useCallback(() =>
  {
    console.log("hello world");
  },[])

  return (
    <>
    <div>
    <p>{count}</p>
      <HookUseCallback msg={msg}/>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
    </>
  )
}

export default App
