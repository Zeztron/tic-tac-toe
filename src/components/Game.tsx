import React, { useState } from 'react';
import Board from './Board';
import Message from './Message';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (i: number) => {
    const moves = [...squares];
    moves[i] = isXNext ? 'X' : 'O';
    setSquares(moves);
    setIsXNext(!isXNext);
  };

  return (
    <div data-test='game-component'>
      <Board squares={squares} onClick={handleClick} />
      <Message
        hasStarted={squares.some((square) => square)}
        isXNext={isXNext}
      />
    </div>
  );
};

export default Game;
