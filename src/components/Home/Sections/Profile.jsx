import React, { useEffect, useState } from 'react'
import { CardPlaylist } from '../CardPlaylist'
import { Buttons } from '../../Buttons'
import { useAuth } from '../../../contexts/authContext';
import { BASE_URL } from '../../../services/audn-api';

export const Profile = ({ user, handleConfiguration }) => {

    const [playlist, setPlaylist] = useState ([]);

    const {user:token,username} = useAuth();

    useEffect(()=>{
        fetch(BASE_URL+'/playlists/', {
            headers:{'auth-token':token}
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPlaylist(data)
        })
    },[])

  return (
  <div className={`contUser${user}`}>
  <div className='contUser__general animation__insideRight'>
      <div className='contUser__top'>
          <div>
              <img src="/nut.svg" alt="nut" onClick={handleConfiguration}/>
          </div>
          <img src="/mileycyrus.png" alt="" />
          <h1>{username}</h1>
          <span>@{username}</span>
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
