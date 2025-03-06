import React from 'react'
import { Link } from 'react-router-dom'
import Linked from './Linked'

function Page1() {
  return (
    <>
    <Linked/>
    <div className='navbar'>
        <Link to="/"><button>Home</button></Link>
      <h1>Hi.. I am Page1</h1>
    </div>

    </>
  )
}

export default Page1
