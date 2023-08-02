import React from 'react'


function GenderItem({ Text, Active, handleClick }) {


  return (
    <div className={`contextual__gender ${Active?"active":""}`} onClick={handleClick && (()=>handleClick(Text))}>
    <span className="contextual__gender-text" >{Text}</span>
  </div>
  )
}

export default GenderItem