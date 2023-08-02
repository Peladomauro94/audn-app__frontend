import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { SearchResult } from "../../SearchResult";
import { useAuth } from "../../../contexts/authContext";
import GenderItem from "../../MusicaContextual/GenderItem";
import { BASE_URL } from "../../../services/audn-api";

const filters = [
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Canciones",
    value: "song",
  },
  {
    label: "Albumes",
    value: "album",
  },
  {
    label: "Artistas",
    value: "artist",
  },
  {
    label: "Playlists",
    value: "playlist",
  },
  {
    label: "Perfiles",
    value: "profile",
  },
];

export const Searcher = ({ searcher, topSongs }) => {
  const [searchState, setSearchState] = useState("");
  const [result, setResult] = useState([]);
  const [onView, setOnView] = useState("top");
  const [searched, setSearched] = useState(false);
  const [lastSearch, setLastSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState("top");

  const { user } = useAuth();

  const updateFilter = (text) => {
    setSearchFilter(text.toLowerCase());
  };

  const filteredResult = result.filter(
    (item) => searchFilter == "top" || item.type == searchFilter
  );

  useEffect(() => {
    const lastSearchLocalStorage = localStorage.getItem("audn_last_search");
    if (lastSearchLocalStorage) {
      setLastSearch(JSON.parse(lastSearchLocalStorage));
    }
  }, []);

  const saveLocal = (data) => {
    localStorage.setItem("audn_last_search", JSON.stringify(data));
  };

  const addLastSearch = (data) => {
    let newLastSearch = [...lastSearch];
    if (newLastSearch[0].id != data.id || newLastSearch[0].type != data.type) {
      if (newLastSearch.length >= 6) {
        newLastSearch.pop();
      }
      newLastSearch.unshift(data);
      setLastSearch(newLastSearch);
      saveLocal(newLastSearch);
    }
  };

  const removeLastSearch = (id, type) => {
    let newLastSearch = [...lastSearch];
    const searchIndex = newLastSearch.findIndex(
      (item) => item.id == id && item.type == type
    );
    newLastSearch.splice(searchIndex, 1);
    setLastSearch(newLastSearch);
    saveLocal(newLastSearch);
  };

  const searchByLastResult = (title) => {
    console.log("setting search to " + title);
    setSearchState(title);
    updateResult(null, title);
  };

  const updateResult = (e, query) => {
    if (e) e.preventDefault();

    const searchQuery = encodeURIComponent(query || searchState);
    if (!searchQuery) {
      return;
    }
    fetch(`${BASE_URL}/songs/search?query=${searchQuery}`, {
      headers: { "auth-token": user },
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setSearched(true);
        if (data[0]) {
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
    setSearchState("");
  };

  const closeSearching = () => {
    setSearched(false);
    setResult([]);
    setSearchState("");
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
            {searched && (
              <img
                onClick={closeSearching}
                className="cruzBusqueda"
                src="/cross.svg"
              />
            )}
          </form>
          {!searched ? (
            <div className="contBusReciente">
              <div className="contTopBR">
                <p className="busReciente">Búsquedas Recientes:</p>
                <hr className="hrStyleOn" />
              </div>

              <div className="recienteLista">
                {lastSearch &&
                  lastSearch.map((element, index) => (
                    <SearchResult
                      key={index}
                      id={element.id}
                      title={element.name}
                      close
                      type={element.type}
                      img={element.img_url}
                      artist={element.artist_name}
                      handleClick={searchByLastResult}
                      handleRemoveClick={removeLastSearch}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className="contBusquedaFinal">
              <div className="contFiltrosBusqueda">
                {filters.map((element, index) => (
                  <GenderItem
                    key={index}
                    Text={element.label}
                    handleClick={() => updateFilter(element.value)}
                    Active={searchFilter == element.value}
                  />
                ))}
              </div>
              <p>Resultado sugerido:</p>
              <div className="contResult">
                {filteredResult[0] && (
                  <SearchResult
                    firstResult
                    title={filteredResult[0].name}
                    type={filteredResult[0].type}
                    img={filteredResult[0].img_url}
                    artist={filteredResult[0].artist_name}
                  />
                )}
                {filteredResult &&
                  filteredResult
                    .slice(1)
                    .map((element) => (
                      <SearchResult
                        key={element.id}
                        title={element.name}
                        type={element.type}
                        img={element.img_url}
                        artist={element.artist_name}
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
