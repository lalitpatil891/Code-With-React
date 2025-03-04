import React from 'react'
import {useState} from "react"


function Fun() {

   const [count, setCount] = useState(0) 

  return (
    <div>
    <p>{count}</p>
    <div className="btn-box">
            <div className="btn"><button className='button-2' onClick={() => setCount(c - 1)}>-</button></div>
            <div className="btn">
              <button className='button-3' onClick={() => setCount(0)}><img className='btn-icon' src="/reset-left-line.png" alt="" /></button>
            </div>
            <div className="btn"><button className='button-1' onClick={() => setCount(c + 1)}>+</button></div>

          </div>


        <h1>I'm a function</h1>

    </div>
  )
}

export default Fun;