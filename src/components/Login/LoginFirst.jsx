import { Link } from "react-router-dom";
import { Buttons } from "../Buttons";
import React, { useState } from "react";
import './index.css'

function LoginFirst({ onView, setOnView}) {

    
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [validateEmail, setValidateEmail] = useState("");
    const [validateName, setValidateName] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [buttonActive, setButtonActive] = useState("disabled");
    const [passwordOnView, setPasswordOnView] = useState("")
    const [isChecked, setIsCheched] = useState(false)
  
  
    const handleUserValue = (e) => {
      const emailValue = e.target.value;
      setEmail(emailValue);
      if (!emailValue) {
        setEmailError("Please enter an email address");
        setValidateEmail("failed")
      } else {
        setEmailError("");
      }
      if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
        setButtonActive("")
      }
  
  
    };
  
    const handlePasswordValue = (e) => {
      const passwordValue = e.target.value;
      setPassword(passwordValue);
      if (!passwordValue) {
        setPasswordError("Password must have at almost 8 characters.");
        setValidatePassword("failed")
      } else {
        setPasswordError("");
        setValidatePassword("");
      }
    };
  
    const handleCheckChange = () =>{
      setIsCheched(!isChecked)
    }
  
    const registerButtonHanndle = (e) => {
      e.preventDefault();
      validateForm();
    };
  
    const validateForm = (mail, pass, nam) => {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailError("");
        setOnView("");
      } else {
        setEmailError("Please enter a valid email address");
        return false;
      }
  
      if (onView === "") {
        if (name.length > 20) {
          setNameError("Please enter a shorter name");
          return false;
        } else {
          setNameError("");
        }
        if (password.length < 8 || password.length > 25) {
          if (password.length < 8 || password.length > 25) {
            setPasswordError("Please enter a valid password");
            return false;
          }
        }
      }
      return;
    };

  return (
    <div className="login-first__main"><div className="register__top">
    { (!onView) 
    ? <button className="register_arrow-back-button" onClick={()=>{setOnView("submit1")}}>
      <img
        className="register__arrow-back"
        src="/arrow-left.svg"
        alt=""
      />
    </button>
    
    :<Link to="/">
      <img
        className="register__arrow-back"
        src="/arrow-left.svg"
        alt=""
      />
    </Link>}
    
    <span className="register__title">Inicio de Sesión</span>
  </div>
  <form action="" type="submit" className="register__form">
    <div className="register-content">
      <div
        className={`register__form `}
      >
        <div className="register__input-div">
          <label
            className="register__input-label"
            htmlFor="register-name__input-user"
          >
            Nombre de usuario o E-mail:
          </label>
          <input
            className={`register__input ${validateName}`}
            value={name}
            onChange={handleUserValue}
            type="text"
            placeholder="Juan Perez"
          />
          <span className={`register__input-span ${validateName}`}>{nameError}</span>
        </div>

        <div className="register__input-div register__second-input">
          <label
            className="register__input-label"
            htmlFor="register-name__input-password-label"
          >
            Contraseña:
          </label>
          <div className="register__password-div">
            <input
              className={`register__input imput-password ${validatePassword}`}
              type={passwordOnView === "hidden" ? "text" : "password"}
              value={password}
              onChange={handlePasswordValue}
              placeholder="Password"
            />
            <img
              className="register__input-eye"
              src={passwordOnView === "hidden" ? "/state=open.svg" : "/state=close.svg"}
              alt=""
              onClick={()=>{passwordOnView === "hidden" ? setPasswordOnView("onView") : setPasswordOnView("hidden")}}
            />
          </div>

          <span className={`register__input-span ${validatePassword}`}>{passwordError}</span>
          
        </div>
      </div>
    </div>
    <Buttons text={"Continuar"} onClick={registerButtonHanndle} />
  </form>
  <span className="login__password-forgotten" onClick={()=>{setOnView("")}}>¿Olvidaste tu contraseña?</span></div>
  )
}

export default LoginFirst