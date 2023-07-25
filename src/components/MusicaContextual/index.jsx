import React, { useState } from "react";
import "../Register/index.css"
import "./index.css";
import { Link } from "react-router-dom";

export const Contextual = () => {

  const [actividad, setActividad] = useState("Actividad");
  const [dropdown1, setDropdown1] = useState("hidden")

  

  return (
    <div className="contextual__main-div">
      <div className="contextual__top">
        <Link to="/">
          <img className="register__arrow-back" src="/arrow-left.svg" alt="" />
        </Link>
        
        <span className="register__title">Música Contextual</span>
        <div></div>
      </div>
      <div className="contextual__main-content">
        <span className="contextual__title">¿Cuál es la ocasión?</span>
        <div className="contextual__nav-div">
          <span className="contextual__nav-text">{actividad}</span>
          <img src="/arrow-down.svg" alt="" onClick={()=>{!dropdown1 ? setDropdown1("hidden") : setDropdown1("")}}/>
        </div>
        <ul className={dropdown1}>
            <li><span>Ejercicio Físico</span></li>
            <li><span>Limpieza</span></li>
            <li><span>Celebración</span></li>
            <li><span>Dormir</span></li>
            <li><span>Meditar</span></li>
            <li><span>Social</span></li>
            <li><span>Estudiar</span></li>
            <li><span>Relajacion</span></li>
            <li className="last-list-item"><span>Viajando</span></li>
          </ul>

      </div>
    </div>
  );
};
