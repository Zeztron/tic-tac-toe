import React, { useState, useEffect } from 'react';
import Board from './Board';
import Message from './Message';
import Reset from './Reset';
import Rewind from './Rewind';
import Announcement from './Announcement';
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
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setWinner(winner);
    }
  }, [squares]);

  useEffect(() => {
    if (winner) {
      const updatedSquares = squares.map((square, i) => ({
        ...square,
        disabled: true,
      }));
      setSquares(updatedSquares);
    }
  }, [winner]);

  const onReset = () => {
    setSquares(Array(9).fill({ value: null, disabled: false }));
    setIsXNext(true);
    setWinner('');
  };

  const onRewind = () => {};

  return (
    <div data-test='game-component'>
      <Board squares={squares} onClick={handleClick} />
      {!winner && (
        <Message
          hasStarted={squares.some((square) => square)}
          isXNext={isXNext}
        />
      )}
      <div>
        <Rewind rewind={onRewind} />
        <Reset reset={onReset} />
      </div>
      {!!winner && <Announcement winner={winner} />}
    </div>
  );
};

export default Game;
