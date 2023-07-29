import React from 'react'
import './index.css'

export const Song = ({ element }) => {
  return (<div className='cancionSt'>
  <div className='cancionLeft'>
      <img className='imgCancion' src={element.avatar_url} alt="" />
      <div className='textCancion'>
          <p className='nameSong'>{element.name}</p>
          <p className='nameArtist'>{element.artist_name}</p>
      </div>
  </div>
  <div className='contRigth'><img src="/trespuntos.svg" alt="" /></div>
</div>
  )
}
