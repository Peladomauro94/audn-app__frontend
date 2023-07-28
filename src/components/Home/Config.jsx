import React from 'react'
import { Buttons } from '../Buttons'
import { Link } from 'react-router-dom'


function Config() {
  return (
    <div className="register__main-div">
      <div className="config__top">
        <div className="register__top">
            <Link to="/">
                <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
            </Link>
            
            <span className="register__title">Configuración</span>
            
        </div>
        <div className='config__buttons'>
            <Buttons text="Editar Apariencia" style="config__button-first"/>
            <Buttons text="Editar Perfil" style="config__button-second"/>
        </div>
      
      </div>
      <div className='config__bottom'>
        <span>Versión: V1.25.03</span>
        <hr />
        <span className='config__logout'>Cerrar Sesión</span>
      </div>

    </div>
  )
}

export default Config