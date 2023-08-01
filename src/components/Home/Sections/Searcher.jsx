import React, { useState } from 'react'
import { Card } from '../Card'
import { useAuth } from '../../../contexts/authContext';

export const Searcher = ({ searcher, topSongs }) => {

    const [searchState, setSearchState] = useState('');
    const [result, setResult] = useState([]);
<<<<<<< Updated upstream
    const [onView, setOnView] = useState('top');
=======
>>>>>>> Stashed changes

    const {user} = useAuth();

    const updateResult = (e) => {
        e.preventDefault()
        const searchQuery = encodeURIComponent(searchState)
        fetch(`http://localhost:3000/songs/search?query=${searchQuery}`, {
            headers:{'auth-token':user},
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    const handleValue = (e) => {
       const value = e.target.value
       setSearchState(value)
    }

<<<<<<< Updated upstream
    const inputClickTop = () =>{
        setOnView('search')
    }

    const inputClickSearch = () =>{
        setOnView('top')
    }

=======
>>>>>>> Stashed changes

  return (<div className={`contSearcher${searcher}`}>
    {onView === 'top' && 
    <>
  <div className='mainSearcher animation__insideLeft'>
      <div className='titulosSearcher'>
          <span>Buscador</span>
      </div>
      <form className='formSearcher' onSubmit={updateResult} action="">
          <img className='searchingImg' src="/searching.svg" alt="" />
<<<<<<< Updated upstream
          <input onClick={inputClickTop} className='searcherInput' type="text" placeholder='¿Qué deseas escuchar?'/>
=======
          <input value={searchState} onChange={handleValue} className='searcherInput' type="text" placeholder='¿Qué deseas escuchar?'/>
>>>>>>> Stashed changes
      </form>
      <div className='contTop'>
          <span className='topVeinteText'>Top 20s</span>
          <hr className='hrStyle'/>
      </div>
  </div>
  <div className='contCards animation__insideRight'>
      {topSongs && topSongs.map((element)=>{
          return<Card key={element.id} element={element}/>
      })}
  </div> 
  </>
  }
    {onView === 'search' && 
  <div  className='resultSearcher'>
    <form className='formSearcher formSearcherOn' onSubmit={updateResult} action="">
          <img onClick={inputClickSearch} className='searchingImg' src="/vector.svg" alt="" />
          <input  value={searchState} onChange={handleValue} className='searcherInput' type="text" placeholder='¿Qué deseas escuchar?'/>
    </form>
    <div className='contBusReciente'>
        <p className='busReciente'>Búsquedas Recientes:</p>
        <hr className='hrStyleOn'/>
    </div>

  </div>
    }
</div> 
  )
}
