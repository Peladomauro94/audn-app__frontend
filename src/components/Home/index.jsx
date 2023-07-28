import React, { useEffect, useState } from 'react'
import './index.css'
import { Navbar } from '../Navbar'
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Buttons } from '../Buttons';

export const Home = () => {

    const [home, setHome] = useState ('On');
    const [searcher, setSearcher] = useState ('Off');
    const [user, setUser] = useState ('Off');
    const [topSongs, setTopSongs] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:3000/songs/top",{
            headers:{
                'auth-token':localStorage.getItem('auth-token')
            }
        })
        .then(res=>res.json())
        .then(dataTop=>{
            setTopSongs(dataTop)
        })
    },[])

    const handleHome = () =>{
        setHome('On');
        setSearcher('Off');
        setUser('Off')
    }

    const handleSearcher = () =>{
        setHome('Off');
        setSearcher('On');
        setUser('Off')
    }

    const handleUser = () =>{
        setHome('Off');
        setSearcher('Off');
        setUser('On')
    }

    const handleConfiguration = () =>{
        setHome('Off');
        setSearcher('Off');
        setUser('Off')
    }

  return (
    <div className='contGeneral'>
        <div className={`contHome${home}`}>
            <div>
                <div className='titulosHome'>
                    <span>Música ya</span>
                    <div className='iconosTit'>
                    <img src="/history.svg" alt="" />
                    <img src="/bell.svg" alt="" />
                    </div>
                </div>
                <div className='contBoxes'>
                    <Link to='/cupidomusical' className='cupidoMusical'>
                        <img className='fotoBox' src="/cupido.svg" alt="" />
                        <div className='textBox'>
                        <p className='tituloBox'>Cupido Musical</p>
                        <p>Tus artistas favoritos nunca van a dejarte con el corazon roto.</p>            
                        </div>
                    </Link>
                    <Link to='/contextual' className='cupidoMusical'>
                        <img className='fotoBox' src="/contextual.svg" alt="" />
                        <div className='textBox'>
                        <p className='tituloBox'>Música Contextual</p>
                        <p>Creamos la playlist perfecta para cualquier situación.</p>            
                        </div>
                    </Link>
                </div>
            </div>
            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div>

        <div className={`contSearcher${searcher}`}>
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
            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div> 

        <div className={`contUser${user}`}>
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
                    <div className='contPlaylist__playlist'>
                        <div className='contPlaylist__image-div'>
                            <img src="/mileycyrus.png" alt="" />
                        </div>
                        <div>
                            <h4>Me fui de gira Mabel</h4>
                            <span>mara_pg</span>
                        </div>  
                    </div>
                </div>
            </div>

            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div> 
    </div>
  )
}
