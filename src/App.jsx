import { useState } from 'react'

function Square({ value, onSquareClick, id }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  )
}
function calculateWinner (sq) {
  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
for (let i = 0; i<winningConditions.length;i++){
  const [first,second,third] = winningConditions[i]
  if (sq[first] && sq[first] === sq[second] && sq[first] === sq[third]){
    console.log("win")
    return sq[first]
  }
}
return null
}
function Game() {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[history.length - 1];
function handlePlay(nextSquares){

}

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext= {xIsNext} squares = {currentSquares} onPlay = {handlePlay}  />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}

function Board({xIsNext, squares, onPlay}) {  
  
  const [square, setSquares] = useState(Array(9).fill(''))
  const winner = calculateWinner(square)
  let status = winner ? `Winner is ${winner}`: 'Next Player is' + (xIsNext ? "X":"O")
  function clickHandler(id) {
    if (squares[id] || calculateWinner(square)) {
      return 
    }
    setSquares(prev => {
      
      const newArr = prev.slice()
      newArr[id] = xIsNext ? "X" : "O"
      return newArr
    })
    console.log(squares);
    setXIsNext(!xIsNext)
  }
  return (
    <>
    <div className="winStatus">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => clickHandler(0)}  value={squares[0]} />
        <Square onSquareClick={() => clickHandler(1)}  value={squares[1]} />
        <Square onSquareClick={() => clickHandler(2)}  value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => clickHandler(3)}  value={squares[3]} />
        <Square onSquareClick={() => clickHandler(4)}  value={squares[4]} />
        <Square onSquareClick={() => clickHandler(5)}  value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => clickHandler(6)}  value={squares[6]} />
        <Square onSquareClick={() => clickHandler(7)}  value={squares[7]} />
        <Square onSquareClick={() => clickHandler(8)}  value={squares[8]} />
      </div>
    </>
  )
}

export default Board;
