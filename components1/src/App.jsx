import { useState } from 'react'
import Fun from './components/Fun'
import Cls from './components/Cls'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Fun/>
      <Cls/>
      
    </>
  )
}

export default App
