import { useContext } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { HomeContext } from "../../contexts/homeContext";

export const Navbar = () => {
  const { handleHome, handleSearcher, handleUser, home, searcher, user } = useContext(HomeContext);

  const {pathname : page} = useLocation()
  const isHome = page=='/home'
  return (
    <div className="contNavbar">
      <Link to={!isHome && '/home'} onClick={(handleHome)} className="seccionesNav">
        <img src={`/home${home}.svg`} alt="" />
        <p>Inicio</p>
      </Link>
      <Link to={!isHome && '/home'} onClick={handleSearcher} className="seccionesNav">
        <img src={`/search${searcher}.svg`} alt="" />
        <p>Buscador</p>
      </Link>
      <Link to={!isHome && '/home'} onClick={handleUser} className="seccionesNav">
        <img src={`/user${user}.svg`} alt="" />
        <p>Perfil</p>
      </Link>
      <Link className="seccionesNav">
        <img src="/friends.svg" alt="" />
        <p>Amigos</p>
      </Link>
    </div>
  );
};
