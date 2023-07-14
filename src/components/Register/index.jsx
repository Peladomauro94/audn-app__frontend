import React, { useState, useEffect } from 'react'
import { RegisterEmail } from './registerEmail'
import { RegisterName } from './RegisterName'


export const Register = () => {
    const [onView, setOnView] = useState (true);

    useEffect(() =>{
    
    }, [onView])

  return (
    <div className='register__main-div'>
        <div className='register__top'>
            <img className='register__arrow-back' src="/arrow-left.svg" alt="" />
            <span className='register__title'>Crear Cuenta</span>
        </div>
        { onView ? <RegisterEmail /> : <RegisterName />  }
        
        <button></button>
    </div>
  )
}
