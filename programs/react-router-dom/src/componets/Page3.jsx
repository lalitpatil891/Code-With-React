import React from 'react'
import { Link } from 'react-router-dom'


function Page3() {
  return (
    <div className='nav'>
     <Link to="/"><button>Back to page</button></Link>
      <h1>Hi... I am Page3</h1>
    </div>
  )
}

export default Page3