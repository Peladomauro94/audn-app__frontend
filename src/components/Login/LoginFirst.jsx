import { Link, useNavigate } from "react-router-dom";
import { Buttons } from "../Buttons";
import React, { useState } from "react";
import "./index.css";
import { useAuth } from "../../contexts/authContext";

function LoginFirst({ onView, setOnView, loginUser }) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validateUser, setValidateUser] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [buttonActive, setButtonActive] = useState("disabled");
  const [passwordOnView, setPasswordOnView] = useState("hidden");

  const navigate = useNavigate()

  const handleLogin = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password }),
    })
    .then(res => res.json())
    .then(data => {
        if(data.token){
            loginUser(data.token)
            localStorage.setItem('auth-token', data.token)
            navigate("/home")
        }else{
            setUserError("El usuario y/o la contraseña son incorrectos.")
        }
    });
  };

  const handleUserValue = (e) => {
    const userValue = e.target.value;
    setUser(userValue);
    validateForm(userValue, password);
  };

  const handlePasswordValue = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validateForm(user, passwordValue);
  };

  const validateForm = (userValue, passwordValue) => {
    if (!userValue) {
      setUserError("Please enter your user name");
      setValidateUser("failed");
    } else {
      setUserError("");
      setValidateUser("");
    }

    if (!passwordValue) {
      setPasswordError("Password must have at almost 8 characters.");
      setValidatePassword("failed");
    } else {
      setPasswordError("");
      setValidatePassword("");
    }

    if (passwordValue !== "" && !userValue !== "") {
      setButtonActive("");
    } else {
      setButtonActive("disabled");
    }

    return;
  };

  const registerButtonHanndle = (e) => {
    e.preventDefault();
    if (buttonActive === "") {
        handleLogin();
    }
  };

  return (
    <div className="login-first__main">
      <div className="register__top">
        <Link to="/">
          <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
        </Link>

        <span className="register__title">Inicio de Sesión</span>
      </div>
      <form action="" type="submit" className="register__form">
        <div className="register-content">
          <div className={`register__form `}>
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
              <span className={`register__input-span ${validateUser}`}>
                {userError}
              </span>
            </div>

            <div className="register__input-div register__second-input">
              <label
                className="register__input-label"
                htmlFor="register-user__input-password-label"
              >
                Contraseña:
              </label>
              <div className="register__password-div">
                <input
                  className={`register__input imput-password ${validatePassword}`}
                  type={passwordOnView === "hidden" ? "password" : "text"}
                  value={password}
                  onChange={handlePasswordValue}
                  placeholder="Password"
                />
                <img
                  className="register__input-eye"
                  src={
                    passwordOnView === "hidden"
                      ? "/state=open.svg"
                      : "/state=close.svg"
                  }
                  alt=""
                  onClick={() => {
                    passwordOnView === "hidden"
                      ? setPasswordOnView("onView")
                      : setPasswordOnView("hidden");
                  }}
                />
              </div>

              <span className={`register__input-span ${validatePassword}`}>
                {passwordError}
              </span>
            </div>
          </div>
        </div>
        <Buttons
          text={"Continuar"}
          onClick={registerButtonHanndle}
          style={buttonActive}
        />
      </form>
      <span
        className="login__password-forgotten"
        onClick={() => {
          onView === "" ? setOnView("submit1") : setOnView("");
        }}
      >
        ¿Olvidaste tu contraseña?
      </span>
    </div>
  );
}

export default LoginFirst;
