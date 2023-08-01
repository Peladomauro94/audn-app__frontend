import './style.css'
export const SearchResult = ({ firstResult, close, handleClick }) => {
  return (
    <div className="search-result">
      <img className={`search-result-img ${firstResult ? 'rounded' : ''}`} src="/arcangel-image.png" />
      <div className="search-result-info">
        <p>Viva Las Vengeance</p>
        <p>Album | Panic! At the Disco</p>
      </div>
      {close && <img className='search-result-close' src="/cross.svg" onClick={handleClick} />}
    </div>
  );
};
