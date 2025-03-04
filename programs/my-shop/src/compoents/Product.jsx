import React from 'react'

export default function Product({title,image,price,display}) {
  return (
      <div className='product'>
         <img src={image} alt={title} height='200' /> 
          <h2>{title}</h2>
          <p>Price:{price}</p>
          <button onClick={()=>display(title)}>Add to cart</button>
    </div>
  )
}
