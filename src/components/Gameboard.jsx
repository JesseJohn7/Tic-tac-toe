import { useState } from 'react'



const Gameboard = () => {

    const initialGameboard =[
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]

    const [gameBoard,setGameBoard] = useState(initialGameboard)
    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameboard)=>{
            const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = 'X'
            return updatedBoard
        })
    }

  return (
    <div>
        <ol id='game-board'>
            {gameBoard.map((row,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                    <li key={colIndex}>
                        <button onClick={ ()=>handleSelectSquare (rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    </div>
  )
}

export default Gameboard