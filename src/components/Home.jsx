import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div>logo</div>
        <div><p>Música a medida</p></div>    
        <button>Registrarse Gratis</button>
        <button>Continuar con Google</button>
        <button>Continuar con Apple</button>
        <Link>Iniciar Sesión</Link>
    </div>
  )
}
