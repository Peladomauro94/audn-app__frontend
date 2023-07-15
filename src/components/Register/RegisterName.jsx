import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterName = ({ handleNameValue, handlePasswordValue, passwordValue, NameValue, nameError, passwordError }) => {

  



  return (
    <div className='register-content'>
        <span className='register__question'>Ingresa un nombre de usuario y contraseña.</span>
        <form className='register__form'>
            <div className='register__input-div'>
                <label className='register__input-label' htmlFor="register-name__input-user">Nombre de usuario:</label>
                <input className='register__input' value={NameValue} onChange={handleNameValue} type="text" placeholder='Juan Perez'/>
                <span className='register__input-span'>{nameError}</span>
            </div>
            
            <div className='register__input-div register__second-input'>
                <label className='register__input-label' htmlFor="register-name__input-password-label">Contraseña:</label>
                <input className='register__input' type="text" value={passwordValue} onChange={handlePasswordValue} placeholder='Password'/>
                <img className='register__input-eye' src="/state=open.svg" alt="" />
                <span className='register__input-span'>{passwordError}</span>
                <div className='register__confirm-terms-div'>
                  <div className='checkbox'><img className='checkbox__checked-img' src="\checked-image.png" alt="" /></div>
                  <span className='register__confirm-terms-text'>He leído los <Link className='register__confirm-terms-link'>Términos</Link> y <Link className='register__confirm-terms-link'>Condiciones.</Link></span>
                </div>
            </div>
            
        </form>
    </div>
  )
}