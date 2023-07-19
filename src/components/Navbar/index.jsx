import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='contNavbar'>
        <Link className='seccionesNav'>
            <img src="/home.svg" alt="" />
            <p>Inicio</p>
        </Link>
        <Link className='seccionesNav'>
            <img src="/search.svg" alt="" />
            <p>Buscador</p>
        </Link>
        <Link className='seccionesNav'>
            <img src="/user.svg" alt="" />
            <p>Perfil</p>
        </Link>
        <Link className='seccionesNav'>
            <img src="/friends.svg" alt="" />
            <p>Amigos</p>
        </Link>
    </div>
  )
}
