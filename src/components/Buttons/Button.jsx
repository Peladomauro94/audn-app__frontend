import React from 'react'
import './ButtonStyle.css'

export const Button = (props) => {
  return (
    <button className='btnStandard' >{props.texto}</button>
  )
}
