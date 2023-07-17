import React from 'react'
import './ButtonStyle.css'

export const Buttons = ({text, onClick}) => {
  return (
    <button className='btnStandard' onClick={onClick} >{text}</button>
  )
}
