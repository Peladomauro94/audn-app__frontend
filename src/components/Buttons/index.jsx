import React from 'react'
import './index.css'

export const Buttons = ({text, onClick, style, disabled}) => {
  return (
    <button className={`btnStandard ${style}`} onClick={onClick} disabled={disabled} >{text}</button>
  )
}
