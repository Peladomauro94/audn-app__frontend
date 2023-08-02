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
import Config from './Sections/Config';
import { BASE_URL } from '../../services/audn-api';

export const Homepage = () => {

    const [all, setAll] = useState ('OnView')
    const [home, setHome] = useState ('On');
    const [searcher, setSearcher] = useState ('Off');
    const [user, setUser] = useState ('Off');
    const [config, setConfig] = useState("contHomeOff")
    const [topSongs, setTopSongs] = useState ([]);


    useEffect(() => {
        fetch(BASE_URL+"/songs/top",{
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
        setAll('contHomeOff');
        setConfig('')

    }

    const handleButtonBack = () =>{
        setAll('');
        setConfig('contHomeOff')
    }

  return (
    <div className='total-cont'>
        <div className={`contGeneral ${all}`}>
            <Home home={home}  />
            <Searcher searcher={searcher} topSongs={topSongs} />
            <Profile user={user} handleConfiguration={handleConfiguration} />
            <Navbar home={home} searcher={searcher} user={user} handleHome={handleHome} handleUser={handleUser} handleSearcher={handleSearcher} />
        </div>
        <Config style={config} handleButtonBack={handleButtonBack}/>
    </div>

  )
}
