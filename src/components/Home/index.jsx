import React from 'react'
import './index.css'
import { Navbar } from '../Navbar'

export const Home = () => {
  return (
    <div className='contHome'>
        <div>
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
                    <div className='textBox'>
                    <p className='tituloBox'>Cupido Musical</p>
                    <p>Tus artistas favoritos nunca van a dejarte con el corazon roto.</p>            
                    </div>
                </div>
                <div className='cupidoMusical'>
                    <img className='fotoBox' src="/contextual.svg" alt="" />
                    <div className='textBox'>
                    <p className='tituloBox'>Música Contextual</p>
                    <p>Creamos la playlist perfecta para cualquier situación.</p>            
                    </div>
                </div>
            </div>
        </div>
        <Navbar/>
    </div>
  )
}
