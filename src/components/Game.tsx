import React, { useState } from 'react';
import Board from './Board';
import Message from './Message';
import { calculateWinner } from '../utils/calculateWinner';

const Game = () => {
  const [squares, setSquares] = useState(
    Array(9).fill({ value: null, disabled: false })
  );
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState('');

  const handleClick = (i: number) => {
    const moves = [...squares];
    moves[i] = isXNext
      ? { value: 'X', disabled: true }
      : { value: 'O', disabled: true };
    setSquares(moves);
    setIsXNext(!isXNext);
    const winner = calculateWinner(moves);
    if (winner) setWinner(winner);
  };

  return (
    <div data-test='game-component'>
      <Board squares={squares} onClick={handleClick} />
      <Message
        hasStarted={squares.some((square) => square)}
        isXNext={isXNext}
      />
      {!!winner && (
        <div data-test='announcement-component'>
          <div>
            <h2>{winner} Wins!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
