import React from 'react'
import './index.css'

export const Home = () => {
  return (
    <div className='contHome'>
        <div className='titulosHome'>
            <span>Música ya</span>
            <div className='iconosTit'>
            <img src="/history.svg" alt="" />
            <img src="/bell.svg" alt="" />
            </div>
        </div>
        <div className='contBoxes'>
            <div className='cupidoMusical'>
                <img className='fotoBox' src="/cupido.svg" alt="" />
                <p>Cupido Musical</p>
                <p>Tus artistas favoritos nunca van a dejarte con el corazon roto.</p>            
            </div>
            <div className='cupidoMusical'>
                <img className='fotoBox' src="/contextual.svg" alt="" />
                <p>Música Contextual</p>
                <p>Creamos la playlist perfecta para cualquier situación.</p>            
            </div>
        </div>
        <div>Barra</div>
    </div>
  )
}
