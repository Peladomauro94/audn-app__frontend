import React, { useState } from "react";
import "../Register/index.css"
import "./index.css";
import { Link } from "react-router-dom";

export const Contextual = () => {

  const [actividad, setActividad] = useState("Actividad");

  console.log('contextual..')

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
          <img src="/arrow-down.svg" alt="" />
        </div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li className="last-list-item"></li>
          </ul>

      </div>
    </div>
  );
};
