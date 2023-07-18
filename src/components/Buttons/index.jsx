import React from 'react'
import './index.css'

export const Buttons = ({text, onClick}) => {
  return (
    <button className='btnStandard' onClick={onClick} >{text}</button>
  )
}
