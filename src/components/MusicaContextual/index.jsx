import React, { useState } from "react";
import "../Register/index.css";
import "./index.css";
import { Link } from "react-router-dom";
import { Buttons } from "../Buttons";

export const Contextual = () => {
  const [actividad, setActividad] = useState("Actividad");
  const [dropdown1, setDropdown1] = useState("hidden");
  const [animo, setAnimo] = useState("Estado de Ánimo");
  const [dropdown2, setDropdown2] = useState("hidden");
  const [clima, setClima] = useState("Clima");
  const [dropdown3, setDropdown3] = useState("hidden");
  const [actividadSelected, setActividadSelected] = useState("");
  const [anmioSelected, setAnimoSelected] = useState("");
  const [climaSelected, setClimaSelected] = useState("");

  const handleActividadChange = (option) => {
    setActividad(option);
    setDropdown1("hidden");
    setActividadSelected("selected") ;
  };

  const handleAnimoChange = (option) =>{
    setAnimo(option);
    setDropdown2("hidden");
    setAnimoSelected("selected"); 
  }

  const handleClimaChange = (option) =>{
    setClima(option);
    setDropdown3("hidden");
    setClimaSelected("selected"); 
  }

  return (
    <div className="contextual__main-div">
      <div>
        <div className="contextual__top">
          <Link to="/">
            <img
              className="register__arrow-back"
              src="/arrow-left.svg"
              alt=""
            />
          </Link>

          <span className="register__title">Música Contextual</span>
          <div></div>
        </div>
        <div className="contextual__main-content">
          <div className="contextual__dropdown1">
            <span className="contextual__title">¿Cuál es la ocasión?</span>
            <div className="contextual__nav-div ">
              <span className={`contextual__nav-text ${actividadSelected}`}>{actividad}</span>
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
              <li onClick={() => handleActividadChange("Ejercicio Físico")}>
                <span>Ejercicio Físico</span>
              </li>
              <li  onClick={() => handleActividadChange("Limpieza")}>
                <span>Limpieza</span>
              </li>
              <li  onClick={() => handleActividadChange("Celebración")}>
                <span>Celebración</span>
              </li>
              <li onClick={() => handleActividadChange("Dormir")}>
                <span>Dormir</span>
              </li>
              <li onClick={() => handleActividadChange("Meditar")}>
                <span>Meditar</span>
              </li>
              <li onClick={() => handleActividadChange("Social")}>
                <span>Social</span>
              </li>
              <li onClick={() => handleActividadChange("Estudiar")}>
                <span>Estudiar</span>
              </li>
              <li onClick={() => handleActividadChange("Relajación")}>
                <span>Relajación</span>
              </li>
              <li className="last-list-item"  onClick={() => handleActividadChange("Viajando")}>
                <span>Viajando</span>
              </li>
            </ul>
          </div>

          <div className="contextual__dropdown2">
            <span className="contextual__title">¿Cómo te sientes?</span>
            <div className="contextual__nav-div ">
              <span className={`contextual__nav-text ${anmioSelected}`}>{animo}</span>
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
              <li  onClick={() => handleAnimoChange("Alegre")}>
                <span>Alegre</span>
              </li>
              <li  onClick={() => handleAnimoChange("Emocionado")}>
                <span>Emocionado</span>
              </li>
              <li  onClick={() => handleAnimoChange("Rebelde")}>
                <span>Rebelde</span>
              </li>
              <li onClick={() => handleAnimoChange("Triste")}>
                <span>Triste</span>
              </li>
              <li onClick={() => handleAnimoChange("Pensativo")}>
                <span>Pensativo</span>
              </li>
              <li onClick={() => handleAnimoChange("Social")}>
                <span>Social</span>
              </li>
              <li className="last-list-item" onClick={() => handleAnimoChange("Enfadado")}>
                <span>Enfadado</span>
              </li>
            </ul>
          </div>

          <div className="contextual__dropdown3">
            <span className="contextual__title">¿Cómo está el clima?</span>
            <div className="contextual__nav-div ">
              <span className={`contextual__nav-text ${climaSelected}`}>{clima}</span>
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
              <li onClick={() => handleClimaChange("Soleado")}>
                <span>Soleado</span>
              </li>
              <li onClick={() => handleClimaChange("Nuboso")}>
                <span>Nuboso</span>
              </li>
              <li onClick={() => handleClimaChange("Lluvioso")}>
                <span>Lluvioso</span>
              </li>
              <li onClick={() => handleClimaChange("Tormenta")}>
                <span>Tormenta</span>
              </li>
              <li className="last-list-item" onClick={() => handleClimaChange("Calmo")}>
                <span>Calmo</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="contextual__gender-div">
          <span className="contextual__title2">
            Selecciona hasta 3 géneros:
          </span>
          <div className="contextual__gender">
            <span className="contextual__gender-text">Funk</span>
          </div>
        </div>
      </div>
      <div className="contextual__button-div">
        <Buttons text={"Crear Playlist"} style={"contextual__button-create"}/>
      </div>
    </div>
  );
};
