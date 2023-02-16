import { Square } from './Square';

function calculateWinner(sq) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [first, second, third] = winningConditions[i];
    if (sq[first] && sq[first] === sq[second] && sq[first] === sq[third]) {
      console.log('win');
      return sq[first];
    }
  }
  return null;
}
function Board({ xIsNext, squares, onPlay }) {
  console.log(squares);
  const winner = calculateWinner(squares);
  let status = winner
    ? `Winner is ${winner}`
    : 'Next Player is' + (xIsNext ? 'X' : 'O');
  function clickHandler(id) {
    if (squares[id] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[id] = 'X';
    } else {
      nextSquares[id] = 'O';
    }
    onPlay(nextSquares);
  }
  return (
    <>
      <div className="winStatus">{status}</div>
      <div className="board">
        {squares.map((x, index) => (
          <Square onSquareClick={() => clickHandler(index)} value={x} />
        ))}
      </div>
    </>
  );
}
export { Board };
