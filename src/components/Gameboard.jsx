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
            const updatedBoard = [...prevGameboard]
            prevGameboard[rowIndex][colIndex] = 'X'
            return prevGameboard
        })
    }

  return (
    <div>
        <ol id='game-board'>
            {initialGameboard.map((row,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                    <li key={colIndex}>
                        <button>{playerSymbol}</button>
                    </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    </div>
  )
}

export default Gameboard