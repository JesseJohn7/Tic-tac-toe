import { useState } from 'react'
import './index.css'
import game_logo from '../src/assets/game-logo.png'
import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'

function App() {
  
  return (
    <>

     {/*  <div className="header">
        <img className='logo' src={game_logo} alt="" />
      </div> */}

      <div id='game-container'>
        <ol id='players'>
            <Player initialName="Player 1" symbol="X"/>
             <Player initialName="Player 2" symbol="O"/>
        </ol>
        <Gameboard />
      </div>
      LOG
    </>
  )
}



export default App
