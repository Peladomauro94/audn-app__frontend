import React, { useState } from "react";
import "../Register/index.css";
import "./index.css"
import LoginFirst from "./LoginFirst";


export const Login = () => {

  const [onView, setOnView] = useState("submit1");

  return (
    <div className="register__main-div">
      <div className={`register__container ${onView === "submit1" ? "" : "d-none"}`}>
        <LoginFirst onView={onView} setOnView={setOnView}/>
      </div>
    </div>
  );
}
