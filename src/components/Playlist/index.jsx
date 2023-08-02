import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import './index.css'
import { Link, useParams } from 'react-router-dom'
import { Song } from './Song'      
import { useAuth } from '../../contexts/authContext'
import { BASE_URL } from '../../services/audn-api'
import { HomeContext } from '../../contexts/homeContext'

export const Playlist = () => {

    const [data, setData] = useState();

    const {id} = useParams();
    const {user:token} = useAuth();

    const {handleHome} = useContext(HomeContext)

    useEffect(()=>{
        console.log(id)
        fetch(BASE_URL+'/playlists/'+id, {
            headers:{'auth-token':token}
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])

  return (<div className='contGeneral'>
    <div className='superior'> 
        <div className='contEncabezado'>
            <Link to='/home' className='contExit'><img src="/vector.svg" alt="" /></Link>
            <div className='contEncText'>
                <p className='generadaText'>Generada del Cupido Musical</p>
                <p className='playlistText'>{data && data.playlist_name}</p>
            </div>
            <div className='contPuntos'><img src="/trespuntos.svg" alt="" /></div>
        </div>
        <div className='contCentral'>
            <div className='contFotos'>
                <img className='pic1' src="/mileycyrus.png" alt="" />
                <img className='pic2' src="/mileycyrus.png" alt="" />
                <img className='pic3' src="/mileycyrus.png" alt="" />
                <img className='pic4' src="/mileycyrus.png" alt="" />
            </div>
        </div>
        <div className='contIconos'>
            <div className='iconLeft'>    
                <img src="/logo-small.svg" alt="" />
                <img src="/verified.svg" alt="" />
                <img src="/compartir.svg" alt="" />
            </div>
            <div className='iconRigth'> 
                <p className='duracionText'>Duracion</p>
                <img src="/history.svg" alt="" />
            </div>
        </div>
        <div className='contCopia'>
            <div className='contCrear'> 
                <img src="/copia.svg" alt="" />
                <p className='crearText'>Crear Copia</p>
            </div>
            <div className='contPlay'>
                <img src="/flechas.svg" alt="" />
                <img src="/play.svg" alt="" />
            </div>
        </div>
        <div className='contCanciones'>
            {data && data.songs.map((element)=>{
                return<Song key={element.id} element={element}/>
             })}
        </div>
    </div>
    <Navbar />
</div>
  )
}
