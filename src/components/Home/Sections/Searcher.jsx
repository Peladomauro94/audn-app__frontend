import React, { useState } from "react";
import { Card } from "../Card";
import { SearchResult } from "../../SearchResult";
import { useAuth } from "../../../contexts/authContext";
import GenderItem from "../../MusicaContextual/GenderItem";

export const Searcher = ({ searcher, topSongs }) => {
  const [searchState, setSearchState] = useState("");
  const [result, setResult] = useState([]);
  const [onView, setOnView] = useState("top");
  const [searched, setSearched] = useState(false);

  const { user } = useAuth();

  const updateResult = (e) => {
    e.preventDefault();
    const searchQuery = encodeURIComponent(searchState);
    fetch(`http://localhost:3000/songs/search?query=${searchQuery}`, {
      headers: { "auth-token": user },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearched(true);
      });
  };

  const handleValue = (e) => {
    const value = e.target.value;
    setSearchState(value);
  };

  const inputClickTop = () => {
    setOnView("search");
  };

  const inputClickSearch = () => {
    setOnView("top");
  };

  return (
    <div className={`contSearcher${searcher}`}>
      {onView === "top" && (
        <>
          <div className="mainSearcher animation__insideLeft">
            <div className="titulosSearcher">
              <span>Buscador</span>
            </div>
            <form className="formSearcher" onSubmit={updateResult} action="">
              <img className="searchingImg" src="/searching.svg" alt="" />
              <input
                onClick={inputClickTop}
                className="searcherInput"
                type="text"
                placeholder="¿Qué deseas escuchar?"
              />
            </form>
            <div className="contTop">
              <span className="topVeinteText">Top 20s</span>
              <hr className="hrStyle" />
            </div>
          </div>
          <div className="contCards animation__insideRight">
            {topSongs &&
              topSongs.map((element) => {
                return <Card key={element.id} element={element} />;
              })}
          </div>
        </>
      )}
      {onView === "search" && (
        <div className="resultSearcher">
          <form
            className="formSearcher formSearcherOn"
            onSubmit={updateResult}
            action=""
          >
            <img
              onClick={inputClickSearch}
              className="searchingImg"
              src="/vector.svg"
              alt=""
            />
            <input
              value={searchState}
              onChange={handleValue}
              className="searcherInput"
              type="text"
              placeholder="¿Qué deseas escuchar?"
            />
          </form>
          {!searched ? (
            <div className="contBusReciente">
              <div className="contTopBR">
                <p className="busReciente">Búsquedas Recientes:</p>
                <hr className="hrStyleOn" />
              </div>

              <div className="recienteLista">
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
              </div>
            </div>
          ) : (
            <div className="contBusquedaFinal">
              <div className="contFiltrosBusqueda">
                <GenderItem Text='Top' Active />
                <GenderItem Text='Canciones'/>
                <GenderItem Text='Albumes'/>
                <GenderItem Text='Artistas'/>
                <GenderItem Text='Playlist'/>
                <GenderItem Text='Perfiles'/>
              </div>
              <p>Resultado sugerido:</p>
              <SearchResult firstResult />
              <SearchResult />
              <SearchResult />
              <SearchResult />
              <SearchResult />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
