import "./style.css";

const typeLabel = {
  song: "Cancion",
  artist: "Artista",
  album: "Album",
  playlist: "Playlist",
};
export const SearchResult = ({
  id,
  title,
  img,
  artist,
  type,
  firstResult,
  close,
  handleClick,
  handleRemoveClick,
}) => {
  const containerClick = () => {
    if (handleClick) handleClick(title);
  };

  const crossClick = (event) => {
    event.stopPropagation();
    if (handleRemoveClick) handleRemoveClick(id, type);
  };
  return (
    <div className="search-result" onClick={containerClick}>
      <img
        className={`search-result-img ${firstResult ? "rounded" : ""}`}
        src={img}
      />
      <div className="search-result-info">
        <p>{title}</p>
        <p>
          {typeLabel[type]} {artist ? "| " + artist : ""}
        </p>
      </div>
      {close && (
        <img
          className="search-result-close"
          src="/cross.svg"
          onClick={crossClick}
        />
      )}
    </div>
  );
};
