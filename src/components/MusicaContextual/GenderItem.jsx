import React from 'react'

function GenderItem({ Text, Active }) {


  return (
    <div className="contextual__gender">
    <span className="contextual__gender-text" onClick={Active}>{Text}</span>
  </div>
  )
}

export default GenderItem