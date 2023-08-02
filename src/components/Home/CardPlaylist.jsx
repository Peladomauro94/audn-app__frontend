import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const CardPlaylist = ({ element }) => {
  const {username} = useAuth()
  return (
    <div className="contPlaylist__playlist">
      <div className="contPlaylist__image-div">
        <Link to={'/playlist/'+element.id}>
          <img className="imageSt" src={element.avatar_url} alt="" />
        </Link>
      </div>
      <div>
        <h4>{element.name}</h4>
        <span>{username}</span>
      </div>
    </div>
  );
};
