import React from 'react'
import { useState } from 'react';
import './App.css'

export default function App() {
  const [c, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        <img className='background-glow' src="/grid.png" alt="" />
        <img className='background-glow' src="/1-shadow.png" alt="" />

        <div className='middle-container'>

          <h2>ClickCount</h2>
          <p>Tap to add, tap to subtract—it's that simple.</p>
          <h1>{c}</h1>

          <div className="btn-box">
            <div className="btn"><button className='button-2' onClick={() => setCount(c - 1)}>-</button></div>
            <div className="btn">
              <button className='button-3' onClick={() => setCount(0)}><img className='btn-icon' src="/reset-left-line.png" alt="" /></button>
            </div>
            <div className="btn"><button className='button-1' onClick={() => setCount(c + 1)}>+</button></div>

          </div>


          <footer>
            A simple project by <a href="https://github.com/lalitpatil891" target="_blank">Lalit Patil </a>– Keep Counting! &#10084;
          </footer>
        </div>
      </div>
    </>
  )
}
