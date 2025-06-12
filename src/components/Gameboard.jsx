const Gameboard = ( {onSelectSquare,turns}) => {

const initialGameboard =[
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]

    let gameBoard = initialGameboard

    for (const turn of turns){
        const {square,player} = turn
        const {row,col} = square 

        gameBoard[row] [col] = player
    }

    
    
    /* 
    const [gameBoard,setGameBoard] = useState(initialGameboard)
    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevGameboard)=>{
            const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol
            return updatedBoard
        })

        onSelectSquare()
        } */
    

  return (
    <div>
        <ol id='game-board'>
            {gameBoard.map((row,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !==null }>
                            {playerSymbol}
                            </button>
                    </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    </div>
  )

}
export default Gameboard