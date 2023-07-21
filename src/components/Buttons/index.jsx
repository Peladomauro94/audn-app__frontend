import React from 'react'
import './index.css'

export const Buttons = ({text, onClick, style}) => {
  return (
    <button className={`btnStandard ${style}`} onClick={onClick} >{text}</button>
  )
}
