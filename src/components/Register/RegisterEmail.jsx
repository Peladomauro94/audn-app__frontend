
import React, { useState } from 'react'

export const RegisterEmail = ({ handleEmailValue, email, errorMsg }) => {

  


 

  return (
    <div className='register-content'>
        <span className='register__question'>¿Cuál es tu correo electrónico?</span>
        <form className='register__form'>
            <label className='register__input-label' htmlFor="register-email__input">Correo electrónico:</label>
            <input className='register__input' value={email} onChange={handleEmailValue} type="text" placeholder='example@audn.com'/>
            <span className='register__input-span'>{errorMsg}</span>
        </form>
    </div>
  )
}