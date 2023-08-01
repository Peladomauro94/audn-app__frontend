import React from 'react'


function GenderItem({ Text, Active, handleClick }) {


  return (
    <div className={`contextual__gender ${Active?"active":""}`} onClick={handleClick}>
    <span className="contextual__gender-text" >{Text}</span>
  </div>
  )
}

export default GenderItem