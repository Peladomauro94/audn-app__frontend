import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { SearchResult } from "../../SearchResult";
import { useAuth } from "../../../contexts/authContext";
import GenderItem from "../../MusicaContextual/GenderItem";
import { BASE_URL } from "../../../services/audn-api";

export const Searcher = ({ searcher, topSongs }) => {
  const [searchState, setSearchState] = useState("");
  const [result, setResult] = useState([]);
  const [onView, setOnView] = useState("top");
  const [searched, setSearched] = useState(false);
  const [lastSearch, setLastSearch] = useState([]);

  useEffect(()=>{
    const lastSearchLocalStorage = localStorage.getItem('audn_last_search');
    console.log(lastSearchLocalStorage)
    if(lastSearchLocalStorage){
      setLastSearch(JSON.parse(lastSearchLocalStorage))
    }
  },[])

  const saveLocal = (data) => {
    localStorage.setItem('audn_last_search', JSON.stringify(data))
  }
  
  const addLastSearch = (data) => {
    let newLastSearch = [...lastSearch]
    if(newLastSearch.length>=6){
      newLastSearch.pop()
    }
    newLastSearch.unshift(data)
    setLastSearch(newLastSearch)
    console.log(newLastSearch)
    saveLocal(newLastSearch)
  }

  const removeLastSearch = (id , type) => {
    let newLastSearch = [...lastSearch]
    const searchIndex = newLastSearch.findIndex((item)=>item.id==id && item.type==type)
    newLastSearch.splice(searchIndex,1)
    setLastSearch(newLastSearch)
    saveLocal(newLastSearch)
  }


  const { user } = useAuth();

  const updateResult = (e) => {
    e.preventDefault();
    const searchQuery = encodeURIComponent(searchState);
    if(!searchQuery){
        return
    }
    fetch(`${BASE_URL}/songs/search?query=${searchQuery}`, {
      headers: { "auth-token": user },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
        setSearched(true);
        if(data[0]){
          addLastSearch(data[0]);
        }
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
    setSearched(false);
    setResult([]);
    setSearchState('');
  };

  const closeSearching = () => {
    setSearched(false);
    setResult([]);
    setSearchState('');
  }

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
            {searched && <img onClick={closeSearching} className="cruzBusqueda" src="/cross.svg" />}
          </form>
          {!searched ? (
            <div className="contBusReciente">
              <div className="contTopBR">
                <p className="busReciente">Búsquedas Recientes:</p>
                <hr className="hrStyleOn" />
              </div>

              <div className="recienteLista">
              {lastSearch && lastSearch.map((element)=>(
                <SearchResult key={element.id} id={element.id} title={element.name} close type={element.type} img={element.img_url} artist={element.artist_name} handleClick={removeLastSearch} />
              )) }
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
              <div className="contResult">
              {result[0] && <SearchResult firstResult title={result[0].name} type={result[0].type} img={result[0].img_url} artist={result[0].artist_name} /> }
              {result && result.slice(1).map((element)=>(
                <SearchResult title={element.name} type={element.type} img={element.img_url} artist={element.artist_name} />
              ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
