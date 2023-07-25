import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Cupido = () => {
  return (
    <div className='contCupido'>
        <div className='contTitle'>
          <Link to='/home' className='flechaTitle'><img src="/vector.svg" alt="" /></Link>
          <p className='textCupido'>Cupido Musical</p>
        </div>
        <div className='contSongs'>
          <img className='imgCupido' src="/neck-deep-image.png" alt="" />
          <div>
            <div><img src="/like-green.svg" alt="" /></div>
            <div><img src="/cancel.svg" alt="" /></div>
          </div>
          <p>Neck Deep</p>
        </div>
        <div>
          <button></button>
        </div>
    </div>
  )
}
