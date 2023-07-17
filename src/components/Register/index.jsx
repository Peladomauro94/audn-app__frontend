import React, { useState, useEffect } from 'react'
import { RegisterEmail } from './registerEmail'
import { RegisterName } from './RegisterName'
import './index.css'
import { Link } from 'react-router-dom'
import { Buttons } from '../Buttons'

export const Register = () => {
    const [onView, setOnView] = useState (true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const registerButtonHanndle = (e) =>{
      e.preventDefault()
      if (!email){
        setEmailError('Please enter an email adress')
      } else if ((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)){
        setEmailError('')
        setOnView(false)
      } else {
        setEmailError('Please enter a valid email adress')
      }
    }

    const handleEmailValue = (e) =>{
      const emailValue = e.target.value
      setEmail(emailValue)
      if (emailValue === ""){
        setEmailError('')
      } 
    }

    const handleNameValue = (e) =>{
      const nameValue = e.target.value
      setName(nameValue) 
    }
  
    const handlePasswordValue = (e) =>{
      const passwordValue = e.target.value
      setPassword(passwordValue) 
    }


  return (
    <div className='register__main-div'>

        <div className='register__container'>
          <div className='register__top'>
            <Link to='/'><img className='register__arrow-back' src="/arrow-left.svg" alt="" /></Link>
            <span className='register__title'>Crear Cuenta</span>
          </div>
            { onView ? <RegisterEmail value={email} handleEmailValue={handleEmailValue} errorMsg={emailError} /> : <RegisterName nameValue={name} passwordValue={password} handleNameValue={handleNameValue} PasswordValue={handlePasswordValue} nameError={nameError} passwordError={passwordError}/>  }
          </div>
        <Buttons text={'Continuar'} onClick={registerButtonHanndle}/>
    </div>
  )
}
