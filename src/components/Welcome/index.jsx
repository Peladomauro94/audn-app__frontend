import React from 'react'
import { Link } from 'react-router-dom'
import './index.css' 

export const Welcome = () => {
  return (
    <div className='contWelcome'>
      <img className='backgroundGif' src="/gif-background.gif" alt="" />
      <div className='contLogo'>
        <div><img className='logoHome' src="/logo-large.png" alt="" /></div>          
        <div><p className='musicaP'>Música a medida.</p></div>    
      </div>
      <div className='pieInicio'>
        <div className='contBotones'>
          <Link className='linkButton' to='/register'><button className='btnStandardOrange'>Registrarse gratis</button></Link>
          <button className='btnStandardBorder' > <img className='iconosBtn' src="/google-logo.svg" alt="" />Continuar con Google</button>
          <button className='btnStandardBorder'> <img className='iconosBtn' src="/apple-logo.svg" alt="" />Continuar con Apple</button>
        </div>
        <div className='contIniciarS'><Link className='iniciarS' to='/login'>Iniciar Sesión</Link></div>
      </div>
    </div>
  )
}
