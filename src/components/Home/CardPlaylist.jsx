import React from "react";
import "./index.css";

export const CardPlaylist = ({ owner, title, img_url }) => {
  return (
    <div className="contPlaylist__playlist">
      <div className="contPlaylist__image-div">
        <img src={img_url} alt="" />
      </div>
      <div>
        <h4>{title}</h4>
        <span>{owner}</span>
      </div>
    </div>
  );
};
