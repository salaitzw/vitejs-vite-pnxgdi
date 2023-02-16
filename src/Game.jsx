import React, { useState } from 'react';
import { Board } from './Board';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    // console.log('next move is ', Math.random() * 115);
    setCurrentMove(nextMove);
  }
  const moves = history.map((cs, indexMove) => {
    let description =
      indexMove > 0 ? `Go to move # ${indexMove}` : 'Go to game start';
    return (
      <li key={indexMove}>
        <button onClick={() => jumpTo(indexMove)}>{description}</button>
      </li>
    );
  });
  console.log('testing jumpTo', moves);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  console.log('It is current history ', currentSquares);
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
export { Game };
