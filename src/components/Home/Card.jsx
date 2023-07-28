import React from 'react'
import './index.css'

export const Card = ({element}) => {
  return (
    <div className='card'>
        <img className='imgCard' src={element.img_url} alt="" />
        <p className='titleSingle'>{element.sogn_name}</p>
        <p className='artistSingle'>{element.artist_name}</p>
    </div>
  )
}
