import { useState } from 'react';

function Square({ value, onSquareClick, id }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
}
export { Square };
