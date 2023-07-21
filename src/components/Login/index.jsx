import React, { useState } from "react";
import "../Register/index.css";
import "./index.css"
import LoginFirst from "./LoginFirst";
import LoginSecond from "./LoginSecond";


export const Login = () => {

  const [onView, setOnView] = useState("submit1");

  return (
    <div className="register__main-div">
      <div className={`register__container `}>
        <LoginFirst onView={onView} setOnView={setOnView}/>
        <LoginSecond onView={onView} setOnView={setOnView}/>  
      </div>
    </div>
  );
}
