import React from 'react'
import { useState } from 'react'
const Player = ({initialName,symbol,isActive,onChangeName}) => {
  const [playerName,setPlayerName] = useState(initialName)
  const [isEditing , SetIsEditing] = useState(false)

  function handleEditClick (){
    SetIsEditing(()=>!isEditing)
    if(isEditing){
      onChangeName(symbol,playerName)
    }
  }

  function handleChange (event){
    
    setPlayerName(event.target.value)
  }
  let editablePlayerName =  <span className='player-name'>{playerName}</span>
  let buttonCaption = 'Edit'
  if (isEditing){
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
    buttonCaption = 'Save'
  }
  return (
    <>
        <li className={isActive ?  'active' : undefined}>
          <span className='player'>
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
          </span>
            <button onClick={handleEditClick} >{buttonCaption}</button>
          </li>
    </>
  )
}

export default Player