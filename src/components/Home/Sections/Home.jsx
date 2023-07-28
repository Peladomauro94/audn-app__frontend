import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({ home, }) => {
  return (<div className={`contHome${home}`}>
  <div>
      <div className='titulosHome'>
          <span>Música ya</span>
          <div className='iconosTit'>
          <img src="/history.svg" alt="" />
          <img src="/bell.svg" alt="" />
          </div>
      </div>
      <div className='contBoxes'>
          <Link to='/cupidomusical' className='cupidoMusical'>
              <img className='fotoBox' src="/cupido.svg" alt="" />
              <div className='textBox'>
              <p className='tituloBox'>Cupido Musical</p>
              <p>Tus artistas favoritos nunca van a dejarte con el corazon roto.</p>            
              </div>
          </Link>
          <Link to='/contextual' className='cupidoMusical'>
              <img className='fotoBox' src="/contextual.svg" alt="" />
              <div className='textBox'>
              <p className='tituloBox'>Música Contextual</p>
              <p>Creamos la playlist perfecta para cualquier situación.</p>            
              </div>
          </Link>
      </div>
  </div>
</div>
  )
}
