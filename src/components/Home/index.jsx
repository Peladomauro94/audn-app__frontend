import React, { useEffect, useState } from 'react'
import './index.css'
import { Navbar } from '../Navbar'
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Buttons } from '../Buttons';
import { CardPlaylist } from './CardPlaylist';
import { Home } from './Sections/Home';
import { Searcher } from './Sections/Searcher';
import { Profile } from './Sections/Profile';

export const Homepage = () => {

    const [all, setAll] = useState ('OnView')
    const [home, setHome] = useState ('On');
    const [searcher, setSearcher] = useState ('Off');
    const [user, setUser] = useState ('Off');
    const [topSongs, setTopSongs] = useState ([]);
    const [playlist, setPlaylist] = useState ([]);


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
    <div className={`contGeneral ${all}`}>
        <Home home={home}  />
        <Searcher searcher={searcher} topSongs={topSongs} />
        <Profile user={user} handleConfiguration={handleConfiguration} playlist={playlist} />
        <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
    </div>
  )
}
