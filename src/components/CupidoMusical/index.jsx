import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export const Cupido = () => {
const artistas = [
    {
      'nombre':'la vela puerca',
      'imagen':'https://www.velapuerca.com/images/velapuerca-facebook.jpg'
    },    
    {
      'nombre':'ke personajes',
      'imagen':'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NMVYXSLW5BHYZHJCTVA4DM5B4Q.jpg'
    },
    {
      'nombre':'karibe con k',
      'imagen':'https://cdn.elobservador.com.uy/112021/1636045876038.jpg'
    }
  ]
  const [artist, setArtist] = useState(artistas);
  const [actual, setActual] = useState(artist[0]);
  const [currentSong, setCurrentSong] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  
  const handleLike = () =>{
    const artistPlay = actual;
    setPlaylist([...playlist, artistPlay]);
    setCurrentSong(currentSong+1);
    setActual(artist[currentSong+1]);
  }

  const handleNolike = () =>{
    setCurrentSong(currentSong+1);
    setActual(artist[currentSong+1])
  }
  

  return (
    <div className='contCupido'>
        <div className='contTitle'>
          <Link to='/home' className='flechaTitle'><img src="/vector.svg" alt="" /></Link>
          <p className='textCupido'>Cupido Musical</p>
        </div>
        <div className='contSongs'>
          <div className='contCentral'>
            <img className='imgCupido' src={actual.imagen} alt="" />
            <div className='botonesCont'>
              <div onClick={handleLike} className='contFondoBoton'><img src="/like-green.svg" alt="" /></div>
              <div onClick={handleNolike} className='contFondoBoton'><img src="/cancel.svg" alt="" /></div>
            </div>
          </div>
          <p className='nameArtist'>{actual.nombre}</p>
        </div>
        <div className='playlist'>
          <div className='contImgPlay' >
            <img className='imgPlaylist' src="/neck-deep4.jpg" alt="" />
            <img className='imgPlaylist' src="/neck-deep4.jpg" alt="" />
          </div>
          {playlist && playlist.map((element)=>{
                    return<div key={element.id}>
                      <div className='imgPlaylist'><img src={element.imagen} alt="" /></div>
                    </div>
                })}
        </div>
        <div className='contButton'>
          <button className='crearPlaylist'>Crear Playlist</button>
        </div>
    </div>
  )
}
