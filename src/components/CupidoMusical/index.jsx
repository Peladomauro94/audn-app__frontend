import React, { useEffect, useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { useAuth } from "../../contexts/authContext";

export const Cupido = () => {
/* const artistas = [
    {
      'id':1,
      'nombre':'la vela puerca',
      'imagen':'https://radiopogo.com.ar/wp-content/uploads/0981799001674060571-520x425.jpg'
    },    
    {
      'id':2,
      'nombre':'ke personajes',
      'imagen':'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/NMVYXSLW5BHYZHJCTVA4DM5B4Q.jpg'
    },
    {
      'id':3,
      'nombre':'karibe con k',
      'imagen':'https://cdn.elobservador.com.uy/112021/1636045876038.jpg'
    }
  ] */
  const [artist, setArtist] = useState([]);
  const [actual, setActual] = useState();
  const [currentSong, setCurrentSong] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  const {user} = useAuth();

  useEffect(()=>{
    fetch('http://localhost:3000/artists/cupido',{headers:{'auth-token':user}})
    .then(res=>res.json())
    .then(data=>{
      setArtist(data)
      setActual(data[0])
    })  
  },[])

  const handleCreatePlay = () =>{
    const artistIdList = playlist.map(item=>{
      return item.id
    })
    console.log(artistIdList)
    fetch('http://localhost:3000/playlists/cupido', {
      method:'POST', 
      headers:{'auth-token':user, 'Content-Type':'application/json'},
      body:JSON.stringify({artistList : artistIdList})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }
  
  const handleLike = () =>{
    const artistPlay = actual
    const ultArtist = artist[artist.length-1]
    const indArtist = artist.length-1
    if(indArtist > currentSong){
      setPlaylist([...playlist, artistPlay]);
      setCurrentSong(currentSong+1);
      setActual(artist[currentSong+1]);
    }if(indArtist === currentSong){
    setPlaylist([...playlist, artistPlay]);  
    setCurrentSong(currentSong+1);
    setActual(ultArtist);
    }if (indArtist < currentSong ){
      setActual(ultArtist)
    }return
  }

  const handleNolike = () =>{
    const ultArtist = artist[artist.length-1]
    const indArtist = artist.length-1
    if(indArtist > currentSong){
      setCurrentSong(currentSong+1);
      setActual(artist[currentSong+1]);
    }if(indArtist === currentSong){
    setActual(ultArtist);
    }return
  }

    const handleHistory = () =>{
    const ultPlaylist = playlist[playlist.length-1];
    const antActual = artist[currentSong-1];
    if(ultPlaylist === antActual){
      setActual(ultPlaylist);
      playlist.pop();
      setCurrentSong(currentSong-1);
    }return
  }

 
  return (
    <div className='contCupido'>
        <div className='contTitle'>
          <Link to='/home' className='flechaTitle'><img src="/vector.svg" alt="" /></Link>
          <p className='textCupido'>Cupido Musical</p>
        </div>
        {actual &&
        <div className='contSongs'>
          <div className='contCentral'>
            <img className='imgCupido' src={actual.img_url} alt="" />
            <div className='botonesCont'>
              <div onClick={handleLike} className='contFondoBoton'><img src="/like-green.svg" alt="" /></div>
              <div onClick={handleNolike} className='contFondoBoton'><img src="/cancel.svg" alt="" /></div>
            </div>
          </div>
          <p className='nameArtist'>{actual.name}</p>
        </div> }
        {(playlist.length===0)
        ?<div className='playlistSpace'></div>
        :<div className='playlist'>
            <div className='matchesCont'>
              <p className='matchesText'>Matches actuales:</p>
              <div className='contAlineador'>
                <div onClick={handleHistory} className='contReloj'><img className='historySt' src="/history.svg" alt="" /></div>
              </div>
            </div>
            <div className='contImgPlay' >
              {playlist && playlist.map((element)=>{
                      return<img key={element.id} className='imgPlaylist' src={element.img_url} alt="" />
                  })}
            </div>
          </div>
        }  
        <div className='contButton'>
          <button onClick={handleCreatePlay} className='crearPlaylist' disabled={(playlist.length<3)} >Crear Playlist</button>
        </div>
    </div>
  )
}
