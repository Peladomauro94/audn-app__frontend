import React from 'react'
import { CardPlaylist } from '../CardPlaylist'
import { Buttons } from '../../Buttons'

export const Profile = ({ user, handleConfiguration, playlist }) => {
  return (<div className={`contUser${user}`}>
  <div>
      <div className='contUser__top'>
          <div>
              <img src="/nut.svg" alt="nut" onClick={handleConfiguration}/>
          </div>
          <img src="/mileycyrus.png" alt="" />
          <h1>Arcangel Mami</h1>
          <span>@arcangel_mami</span>
      </div>
      <div className='contPlaylist__title'>
          <span >Mis Playlists</span>
          <hr className='hrStyle'/>
          <Buttons style={"contPlaylist-button"} text={"Crear Playlist"}/>
      </div>
      <div className='contPlaylist__bottom'>
   
      {playlist && playlist.map((element)=>{
          return<CardPlaylist key={element.id} element={element}/>
      })}
      </div>
    </div>
    </div> 
  )
}
