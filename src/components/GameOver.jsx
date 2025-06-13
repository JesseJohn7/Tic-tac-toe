import React from 'react'

const GameOver = ({winner}) => {
  return (
    <div id='game-over'>
        <h2>Game Over !</h2>
        {winner && <p>{winner} Won !</p>}
        {!winner && <p> It's a draw !</p>}
        <p><button>Rematch!</button></p>
    </div>
  )
}

export default GameOver