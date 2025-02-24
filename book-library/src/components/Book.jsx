import React from 'react'

function Book({ url, title }) {

  return (
    <>
      <div className='main-2'>
        <div className='main-flex-container'>
          <div className='Book' >
            <img className='img-block' src={url} alt='wings of fire' height='100%' />
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>

  )
}
export default Book