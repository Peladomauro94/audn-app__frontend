import React, { useEffect, useState } from 'react'
import { CardPlaylist } from '../CardPlaylist'
import { Buttons } from '../../Buttons'
import { useAuth } from '../../../contexts/authContext';

export const Profile = ({ user, handleConfiguration }) => {

    const [playlist, setPlaylist] = useState ([]);

    const {user:token} = useAuth();

    useEffect(()=>{
        fetch('http://localhost:3000/playlists/', {
            headers:{'auth-token':token}
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPlaylist(data)
        })
    },[])

  return (<div className={`contUser${user}`}>
  <div className='contGral'>
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
