import React from 'react'
import { Card } from '../Card'

export const Searcher = ({ searcher, topSongs }) => {
  return (<div className={`contSearcher${searcher}`}>
  <div className='mainSearcher'>
      <div className='titulosSearcher'>
          <span>Buscador</span>
      </div>
      <form className='formSearcher' action="">
          <img className='searchingImg' src="/searching.svg" alt="" />
          <input className='searcherInput' type="text" placeholder='¿Qué deseas escuchar?'/>
      </form>
      <div className='contTop'>
          <span className='topVeinteText'>Top 20s</span>
          <hr className='hrStyle'/>
      </div>
  </div>
  <div className='contCards'>
      {topSongs && topSongs.map((element)=>{
          return<Card key={element.id} element={element}/>
      })}
  </div>
</div> 
  )
}