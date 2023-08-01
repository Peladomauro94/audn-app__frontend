import React from 'react'

function ListItem({ Title, Identity, Name}) {
  return (
    <div className='list-item__main'>
        <img src="" alt="" />
        <div>
            <span className='list-item__title'>{Title}</span>
            <span className='list-item__info'>{Identity} | {Name}</span>
        </div>
    </div>
  )
}

export default ListItem