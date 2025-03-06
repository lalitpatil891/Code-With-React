import React from 'react'
import { Link } from 'react-router-dom'

function Page1() {
  return (
    <div className='Nav'>
        <Link to="/"><button>Back to page</button></Link>
      <h1>Hi.. I am Page1</h1>
    </div>
  )
}

export default Page1
