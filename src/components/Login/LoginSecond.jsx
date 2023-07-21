import React, { useState } from "react";
import { Buttons } from "../Buttons";

function LoginSecond({ setOnView, onView }) {

  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [validateUser, setValidateUser] = useState("");
  const [buttonActive, setButtonActive] = useState("disabled");

  const handleUserValue = (e) => {
    const userValue = e.target.value;
    setUser(userValue);
    if (!userValue) {
      setUserError("Please enter your user name");
      setValidateUser("failed")
      setButtonActive("disabled")
    } else {
      setUserError("");
      setButtonActive("");
      setValidateUser("acepted");
    }

  };

  const recoverPasswordHandle = (e) => {
    e.preventDefault();
    if(!user) {
      return true
    }
  };

  

  return (
    <div className={`login-second__main ${onView === "submit1" ? "d-none" : ""}`}>
      <div className="register__top">
        <button
          className="register_arrow-back-button"
          onClick={() => {
            setOnView("submit1");
          }}
        >
          <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
        </button>

        <span className="register__title">Recuperar Cuenta</span>
      </div>
      <form action="" type="submit" className="register__form">
    <div className="register-content">
      <div
        className={`register__form `}
      >
        <div className="register__input-div">
          <label
            className="register__input-label"
            htmlFor="register-user__input-user"
          >
            Nombre de Usuario o E-mail:
          </label>
          <input
            className={`register__input ${validateUser}`}
            value={user}
            onChange={handleUserValue}
            type="text"
            placeholder="Juan Perez"
            required
          />
          <span className={`register__input-span ${validateUser}`}>{userError}</span>
        </div>     
        
      </div>
    </div>
    <Buttons text={"Continuar"} onClick={recoverPasswordHandle} />
  </form>
    </div>
  );
}

export default LoginSecond;
