import React, { useState } from "react";
import "../Register/index.css";
import "./index.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons";

export const Contextual = () => {
  const [actividad, setActividad] = useState("Actividad");
  const [dropdown1, setDropdown1] = useState("hidden");
  const [animo, setAnmo] = useState("Estado de Ánimo");
  const [dropdown2, setDropdown2] = useState("hidden");
  const [clima, setClima] = useState("Clima")
  const [dropdown3, setDropdown3] = useState("hidden");

  return (
    <div className="contextual__main-div">
      <div>
      <div className="contextual__top">
        <Link to="/">
          <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
        </Link>

        <span className="register__title">Música Contextual</span>
        <div></div>
      </div>
      <div className="contextual__main-content">
        <span className="contextual__title">¿Cuál es la ocasión?</span>
        <div className="contextual__nav-div contextual__dropdown1">
          <span className="contextual__nav-text">{actividad}</span>
          <img
            src="/arrow-down.svg"
            alt=""
            onClick={() => {
              dropdown1 === "onview"
                ? setDropdown1("hidden")
                : setDropdown1("onview");
            }}
          />
        </div>
        <ul className={dropdown1}>
          <li>
            <span>Ejercicio Físico</span>
          </li>
          <li>
            <span>Limpieza</span>
          </li>
          <li>
            <span>Celebración</span>
          </li>
          <li>
            <span>Dormir</span>
          </li>
          <li>
            <span>Meditar</span>
          </li>
          <li>
            <span>Social</span>
          </li>
          <li>
            <span>Estudiar</span>
          </li>
          <li>
            <span>Relajacion</span>
          </li>
          <li className="last-list-item">
            <span>Viajando</span>
          </li>
        </ul>

        <span className="contextual__title">¿Cómo te sientes?</span>
        <div className="contextual__nav-div contextual__dropdown2">
          <span className="contextual__nav-text">{animo}</span>
          <img
            src="/arrow-down.svg"
            alt=""
            onClick={() => {
              dropdown2 === "onview"
                ? setDropdown2("hidden")
                : setDropdown2("onview");
            }}
          />
        </div>
        <ul className={`contextual__second-drop ${dropdown2}`}>
          <li>
            <span>Alegre</span>
          </li>
          <li>
            <span>Emocionado</span>
          </li>
          <li>
            <span>Rebelde</span>
          </li>
          <li>
            <span>Triste</span>
          </li>
          <li>
            <span>Pensativo</span>
          </li>
          <li>
            <span>Social</span>
          </li>
          <li className="last-list-item">
            <span>Enfadado</span>
          </li>
        </ul>

        <span className="contextual__title">¿Cómo está el clima?</span>
        <div className="contextual__nav-div contextual__dropdown3">
          <span className="contextual__nav-text">{clima}</span>
          <img
            src="/arrow-down.svg"
            alt=""
            onClick={() => {
              dropdown3 === "onview"
                ? setDropdown3("hidden")
                : setDropdown3("onview");
            }}
          />
        </div>
        <ul className={`contextual__third-drop ${dropdown3}`}>
          <li>
            <span>Soleado</span>
          </li>
          <li>
            <span>Nuboso</span>
          </li>
          <li>
            <span>Lluvioso</span>
          </li>
          <li>
            <span>Tormenta</span>
          </li>
          <li className="last-list-item">
            <span>Calmo</span>
          </li>
        </ul>
      </div>
      <div className="contextual__gender-div">
        <span className="contextual__title2">Selecciona hasta 3 géneros:</span>
        <div className="contextual__gender">
          <span className="contextual__gender-text">Funk</span>
        </div>
      </div>
      </div>
      <Buttons text={"Crear Playlist"}/>
    </div>
  );
};
