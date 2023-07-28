import React from 'react'
import './index.css'

export const Song = () => {
  return (<div className='cancionSt'>
  <div className='cancionLeft'>
      <img className='imgCancion' src="/neck-deep4.jpg" alt="" />
      <div className='textCancion'>
          <p className='nameSong'>Wish You Were Here</p>
          <p className='nameArtist'>Neck Deep</p>
      </div>
  </div>
  <div className='contRigth'><img src="/trespuntos.svg" alt="" /></div>
</div>
  )
}
