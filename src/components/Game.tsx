import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = () => {};

  return (
    <div data-test='game-component'>
      <Board squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Game;
