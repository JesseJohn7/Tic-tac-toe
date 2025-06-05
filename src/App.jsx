import { useState } from 'react'
import './index.css'
import game_logo from '../src/assets/game-logo.png'
import Player from './components/Player.jsx'

function App() {
  
  return (
    <>

     {/*  <div className="header">
        <img className='logo' src={game_logo} alt="" />
      </div> */}

      <div id='game-container'>
        <ol id='players'>
            <Player name="Player 1" symbol="X"/>
             <Player name="Player 2" symbol="O"/>
        </ol>
      </div>
    </>
  )
}



export default App
