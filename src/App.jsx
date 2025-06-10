import { useState } from 'react'
import './index.css'
import game_logo from '../src/assets/game-logo.png'
import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'

function App() {
  const [activePlayer , setActivePlayer] = useState ('X')

  function handleSelectSquare (){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }
  return (
    <>

     {/*  <div className="header">
        <img className='logo' src={game_logo} alt="" />
      </div> */}

      <div id='game-container'>
        <ol id='players' className='highlight-player'>
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
             <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </>
  )
}



export default App
