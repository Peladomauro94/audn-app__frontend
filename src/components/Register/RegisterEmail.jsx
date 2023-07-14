import React from 'react'

export const RegisterEmail = () => {
  return (
    <div className='register-email'>
        <span className='register-email__question'>¿Cuál es tu correo electrónico?</span>
        <form>
            <label className='register-email__input-label' htmlFor="register-email__input">Correo electrónico:</label>
            <input className='register-email__input' type="text" placeholder='example@audn.com'/>
            <span></span>
        </form>
    </div>
  )
}