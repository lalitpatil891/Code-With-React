import React from 'react'
import { Link } from 'react-router-dom'

function Page2() {
  return (
    <div className='nav'>
     <Link to="/"><button>Back to page</button></Link>
      <h1>Hi... I am Page2</h1>
    </div>
  )
}

export default Page2
