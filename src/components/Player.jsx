import React from 'react'
import { useState } from 'react'
const Player = ({name,symbol}) => {
  const [isEditing , SetIsEditing] = useState(false)
  function handleEditClick (){
    SetIsEditing(()=>!isEditing)
  }
  let playerName =  <span className='player-name'>{name}</span>
  let buttonCaption = 'Edit'
  if (isEditing){
    playerName = <input type='text' required value={name}/>
    buttonCaption = 'Save'
  }
  return (
    <>
        <li>
          <span className='player'>
            {playerName}
            <span className='player-symbol'>{symbol}</span>
          </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
          </li>
    </>
  )
}

export default Player