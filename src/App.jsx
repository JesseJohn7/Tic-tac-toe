import { useState } from 'react'
import './index.css'
import Player from './components/Player.jsx'
import Gameboard from './components/Gameboard.jsx'
import Log from './Log.jsx'
import { WINNING_COMBINATIONS } from './winning_combination.js'

function App() { 

    function deriveActivePlayer(gameTurns){
      let currentPlayer = 'X'
      if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'

    }
    return currentPlayer
  }

  const initialGameBoard  = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
  ]

  let winner ;
  const [gameTurns ,setGameTurns] = useState([])
  /* const [hasWinner,setHasWinner] = useState(false)  */
 /*  const [activePlayer , setActivePlayer] = useState ('X') */

 const activePlayer = deriveActivePlayer(gameTurns) ;

 let gameBoard = initialGameBoard
  for (const turn of gameTurns){
    const {square,player} = turn
    const {row,col} = square

    gameBoard [row] [col] = player 
  }
  for (const combination of WINNING_COMBINATIONS){
    const firstSuareSymbol = gameBoard[combination[0].row] [combination[0].column]
    const SecondSuareSymbol = gameBoard [combination[1].row]  [combination[1].column]
    const thirdSquareSymbol = gameBoard [combination[2].row] [combination[2].column]
    if(firstSuareSymbol && firstSuareSymbol === SecondSuareSymbol && firstSuareSymbol === thirdSquareSymbol){
      winner = firstSuareSymbol
    }
  }

  
  function handleSelectSquare (rowIndex,colIndex){
    /* setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X') */
    setGameTurns((prevTurns) =>{
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [
        {square:{row:rowIndex,col:colIndex},player:currentPlayer}, ...prevTurns,
      ]
      return updatedTurns
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
        {winner && <p>You won , {winner}!</p>}
        <Gameboard onSelectSquare={handleSelectSquare} board ={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </>
  )
}



export default App
