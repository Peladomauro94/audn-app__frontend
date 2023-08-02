import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Buttons } from "../Buttons";
import { useAuth } from "../../contexts/authContext";
import { BASE_URL } from "../../services/audn-api";

export const Register = () => {
  const [onView, setOnView] = useState("submit1");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validateEmail, setValidateEmail] = useState("");
  const [validateName, setValidateName] = useState("");
  const [validatePassword, setValidatePassword] = useState("");
  const [passwordOnView, setPasswordOnView] = useState("hidden");
  const [isChecked, setIsCheched] = useState(false);
  const [buttonActive, setButtonActive] = useState("disabled");

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleRegister = () => {
    fetch(BASE_URL+"/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setUser(data.token);
          localStorage.setItem("auth-token", data.token);
          console.log("registado");
          navigate("/home");
        } else {
          setNameError("User name is already in use");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleEmailValue = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!emailValue) {
      setEmailError("Please enter an email address");
      setValidateEmail("failed");
    } else {
      setEmailError("");
    }
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setButtonActive("");
    } else {
      setButtonActive("disabled");
    }
  };

  const handleNameValue = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    validate(isChecked, nameValue, password);
  };

  const handlePasswordValue = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validate(isChecked, name, passwordValue);
  };

  const handleCheckChange = () => {
    setIsCheched(!isChecked);
    validate(!isChecked, name, password);
  };

  const registerButtonHanndle = (e) => {
    e.preventDefault();
    if (onView === "submit1") {
      setOnView("");
    } else {
      handleRegister();
    }
  };

  const validate = (isChecked, nameValue, passwordValue) => {
    if (!nameValue) {
      setNameError("Please enter a user name");
      setValidateName("failed");
      setButtonActive("disabled");
    } else {
      setNameError("");
      setValidateName("");
    }

    if (
      !passwordValue ||
      passwordValue.length < 8 ||
      passwordValue.length > 25
    ) {
      setPasswordError("Password must have at almost 8 characters.");
      setValidatePassword("failed");
      setButtonActive("disabled");
    } else {
      setPasswordError("");
      setValidatePassword("");
      setButtonActive("");
    }

    if (!isChecked) {
      setButtonActive("disabled");
    }
  };

  return (
    <div className="register__main-div">
      <div className="register__container">
        <div className="register__top">
          {!onView ? (
            <button
              className="register_arrow-back-button"
              onClick={() => {
                setOnView("submit1");
              }}
            >
              <img
                className="register__arrow-back"
                src="/arrow-left.svg"
                alt=""
              />
            </button>
          ) : (
            <Link to="/">
              <img
                className="register__arrow-back"
                src="/arrow-left.svg"
                alt=""
              />
            </Link>
          )}

          <span className="register__title">Crear Cuenta</span>
          <div></div>
        </div>
        <form
          action=""
          className="register__form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="register-content">
            <div className={
                  onView === "submit1" ? "" : "d-none"
                }>
              <span className="register__question">
                ¿Cuál es tu correo electrónico?
              </span>
              <div
                className={`register__form `}
              >
                <div className="register__input-div register__first-animation">
                  <label
                    className="register__input-label"
                    htmlFor="register-email__input"
                  >
                    Correo electrónico:
                  </label>
                  <input
                    className={`register__input ${validateEmail}`}
                    value={email}
                    onChange={handleEmailValue}
                    type="text"
                    placeholder="example@audn.com"
                    required
                  />
                  <span className={`register__input-span ${validateEmail}`}>
                    {emailError}
                  </span>
                </div>
              </div>
            </div>

            <div className={onView !== "submit1" ? "" : "d-none"}>
              <span className="register__question">
                Ingresa un nombre de usuario y contraseña.
              </span>
              <div className={`register__form register__second-animation`}>
                <div className="register__input-div">
                  <label
                    className="register__input-label"
                    htmlFor="register-name__input-user"
                  >
                    Nombre de usuario:
                  </label>
                  <input
                    className={`register__input ${validateName}`}
                    value={name}
                    onChange={handleNameValue}
                    type="text"
                    placeholder="Juan Perez"
                    required
                  />
                  <span className={`register__input-span ${validateName}`}>
                    {nameError}
                  </span>
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
                      className={`register__input input-password ${validatePassword}`}
                      type={passwordOnView === "hidden" ? "password" : "text"}
                      value={password}
                      onChange={handlePasswordValue}
                      placeholder="Password"
                      required
                    />
                    <img
                      className="register__input-eye"
                      src={
                        passwordOnView === "hidden"
                          ? "/state=close.svg"
                          : "/state=open.svg"
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
                  <div className="register__confirm-terms-div">
                    <div
                      className="checkbox"
                      checked={isChecked}
                      onClick={handleCheckChange}
                      required
                    >
                      {isChecked && (
                        <img
                          className="checkbox__checked-img"
                          src="\checked-image.png"
                          alt=""
                        />
                      )}
                    </div>
                    <span className="register__confirm-terms-text">
                      He leído los
                      <Link className="register__confirm-terms-link">
                        Términos
                      </Link>
                      y
                      <Link className="register__confirm-terms-link">
                        Condiciones.
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Buttons
            text={"Continuar"}
            onClick={registerButtonHanndle}
            style={`register__button-anmiation ${buttonActive}`}
          />
        </form>
      </div>
    </div>
  );
};
