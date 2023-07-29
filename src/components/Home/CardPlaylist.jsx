import React from "react";
import "./index.css";

export const CardPlaylist = ({ element }) => {
  return (
    <div className="contPlaylist__playlist">
      <div className="contPlaylist__image-div">
        <img className="imageSt" src={element.avatar_url} alt="" />
      </div>
      <div>
        <h4>{element.name}</h4>
        <span>Usuario</span>
      </div>
    </div>
  );
};
