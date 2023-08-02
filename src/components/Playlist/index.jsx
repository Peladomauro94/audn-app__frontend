import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import './index.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Song } from './Song'      
import { useAuth } from '../../contexts/authContext'
import { BASE_URL } from '../../services/audn-api'
import { HomeContext } from '../../contexts/homeContext'

export const Playlist = () => {

    const [data, setData] = useState();

    const {id} = useParams();
    const {user:token} = useAuth();

    const navigate = useNavigate()

    useEffect(()=>{
        console.log(id)
        fetch(BASE_URL+'/playlists/'+id, {
            headers:{'auth-token':token}
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                return navigate('/home')
            }
            let totalTime = 0
            for(let i = 0; i<data.songs.length; i++){
                totalTime+= parseInt(data.songs[i].time)
            }

            const duration = getDuration(totalTime)
            data.duration = duration
            setData(data)
        })
    },[])

    const getDuration = (totalTime) => {
        const hour = Math.floor(totalTime / 3600)

        totalTime = totalTime%3600

        const minute = Math.floor(totalTime / 60)

        return `${hour > 0 ? hour+'h ' : ''}${minute}m`
    }

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
                <img className='pic1' src={data ? data.songs[0]?.avatar_url : "/mileycyrus.png"} alt="" />
                <img className='pic2' src={data ? data.songs[1]?.avatar_url : "/mileycyrus.png"} alt="" />
                <img className='pic3' src={data ? data.songs[2]?.avatar_url : "/mileycyrus.png"} alt="" />
                <img className='pic4' src={data ? data.songs[3]?.avatar_url : "/mileycyrus.png"} alt="" />
            </div>
        </div>
        <div className='contIconos'>
            <div className='iconLeft'>    
                <img src="/logo-small.svg" alt="" />
                <img src="/verified.svg" alt="" />
                <img src="/compartir.svg" alt="" />
            </div>
            <div className='iconRigth'> 
                <p className='duracionText'>{data && data.duration}</p>
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
