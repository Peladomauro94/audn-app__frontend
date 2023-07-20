import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Navbar = ({ handleHome, handleSearcher, handleUser, home, searcher, user }) => {
  return (
    <div className='contNavbar'>
        <Link onClick={handleHome} className='seccionesNav'>
            <img src={`/home${home}.svg`} alt="" />
            <p>Inicio</p>
        </Link>
        <Link onClick={handleSearcher} className='seccionesNav'>
            <img src={`/search${searcher}.svg`} alt="" />
            <p>Buscador</p>
        </Link>
        <Link onClick={handleUser} className='seccionesNav'>
            <img src={`/user${user}.svg`} alt="" />
            <p>Perfil</p>
        </Link>
        <Link className='seccionesNav'>
            <img src="/friends.svg" alt="" />
            <p>Amigos</p>
        </Link>
    </div>
  )
}
