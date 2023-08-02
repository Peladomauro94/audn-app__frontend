import React, { useContext, useEffect, useState } from 'react'
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
import { HomeContext } from '../../contexts/homeContext';

export const Homepage = () => {

    const [all, setAll] = useState ('OnView')
    const [config, setConfig] = useState("contHomeOff")
    const [topSongs, setTopSongs] = useState ([]);

    const {home,searcher,user} = useContext(HomeContext)

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
            <Navbar />
        </div>
        <Config style={config} handleButtonBack={handleButtonBack}/>
    </div>

  )
}
