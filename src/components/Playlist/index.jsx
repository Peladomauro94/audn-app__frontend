import React from 'react'
import { Navbar } from '../Navbar'
import './index.css'
import { Link } from 'react-router-dom'
import { Song } from './Song'

export const Playlist = () => {
  return (<div className='contGeneral'>
    <div className='superior'> 
        <div className='contEncabezado'>
            <Link to='/cupidomusical' className='contExit'><img src="/vector.svg" alt="" /></Link>
            <div className='contEncText'>
                <p className='generadaText'>Generada del Cupido Musical</p>
                <p className='playlistText'>Playlist Generada</p>
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
            <Song/>
            <Song/>
            <Song/>
        </div>
    </div>
    <Navbar home='On' searcher='Off' user='Off' />
</div>
  )
}
