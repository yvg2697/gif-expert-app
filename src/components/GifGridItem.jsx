import React from 'react'

export const GifGridItem = ({id,title,images}) => {

  return (  
    <div>
      <p> {title }</p>  
      <img src={images} alt={title}/>
    </div>
  )
}
