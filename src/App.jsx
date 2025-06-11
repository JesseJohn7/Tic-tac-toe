import { useState } from 'react'
import './index.css'
import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'
import Log from './Log.jsx'

function App() {
  const [gameTurns ,setGameTurns] = useState([])
  const [activePlayer , setActivePlayer] = useState ('X')

  function handleSelectSquare (rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns((prevTurns) =>{
      
      let currentPlayer = 'X' 

      if (prevTurns.length > 0 && prevTurns[0].player === 'X' ) {
        currentPlayer = 'O'
      }
      const updatedTurns = [
        {square : { row:rowIndex , col:colIndex}, player:currentPlayer} ,
         ...prevTurns,
        ];
      return updatedTurns;
    });
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
        <Gameboard onSelectSquare={handleSelectSquare} turns ={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </>
  )
}



export default App
