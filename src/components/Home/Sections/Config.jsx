import React from 'react'
import { Buttons } from '../../Buttons'
import { useAuth } from '../../../contexts/authContext'
import { useNavigate } from 'react-router-dom';


function Config({ style, handleButtonBack }) {

  const {logout} = useAuth();
  const navigate = useNavigate();


  return (
    <div className={`config__main ${style}`}>
      <div className="config__top animation__insideRight">
        <div className="register__top">
            <button className="config__buttom-back" onClick={handleButtonBack}>
                <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
            </button>
            
            <span className="register__title">Configuración</span>
            <div></div>
        </div>
        <div className='config__buttons'>
            <Buttons text="Editar Apariencia" style="config__button-first"/>
            <Buttons text="Editar Perfil" style="config__button-second"/>
        </div>
      
      </div>
      <div className='config__bottom animation__insideRight'>
        <span>Versión: V1.25.03</span>
        <hr />
        <span onClick={()=>{logout();navigate('/')}} className='config__logout'>Cerrar Sesión</span>
      </div>

    </div>
  )
}

export default Config