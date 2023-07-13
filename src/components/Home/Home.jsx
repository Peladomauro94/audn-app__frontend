import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
  return (
    <div>
      <div className='contLogo'>
        <div><img className='logoHome' src="../../public/logo-large.png" alt="" /></div>          
        <div><p className='musicaP'>Música a medida.</p></div>    
      </div>
      <div className='pieInicio'>
        <div className='contBotones'>
        <button>Registrarse Gratis</button>
        <button>Continuar con Google</button>
        <button>Continuar con Apple</button>
        </div>
        <div className='contIniciarS'><Link className='iniciarS'>Iniciar Sesión</Link></div>
      </div>
    </div>
  )
}
