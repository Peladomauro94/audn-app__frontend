import React, { useEffect, useState } from 'react'
import './index.css'
import { Navbar } from '../Navbar'
import { Link } from 'react-router-dom';
import { Card } from './Card';

export const Home = () => {

    const [home, setHome] = useState ('On');
    const [searcher, setSearcher] = useState ('Off');
    const [user, setUser] = useState ('Off');
    const [topSongs, setTopSongs] = useState ([]);

    useEffect(()=>{
        fetch("http://localhost:3000/songs/top")
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

    console.log(topSongs)

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
                    return<Card element={element}/>
                })}
            </div>
            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div> 

        <div className={`contUser${user}`}>
            <div>Informacion de usuario</div>
            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div> 
    </div>
  )
}
