import React from 'react'

function Book ({url,title})
{

  return (
    <div className='Book' >
          <img src={url} alt='wings of fire' height='300'/>
          <h2>{title }</h2>
    </div>
  )
}
export default Book