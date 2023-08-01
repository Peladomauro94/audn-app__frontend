import './style.css'
export const SearchResult = ({ title, description, firstResult, close, handleClick }) => {
  return (
    <div className="search-result">
      <img className={`search-result-img ${firstResult ? 'rounded' : ''}`} src="/arcangel-image.png" />
      <div className="search-result-info">
        <p>{title}</p>
        <p>{description} | Artista</p>
      </div>
      {close && <img className='search-result-close' src="/cross.svg" onClick={handleClick} />}
    </div>
  );
};
