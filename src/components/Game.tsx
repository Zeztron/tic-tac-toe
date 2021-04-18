import React, { useState, useEffect } from 'react';
import Board from './Board';
import Message from './Message';
import Reset from './Reset';
import Rewind from './Rewind';
import Announcement from './Announcement';
import { calculateWinner } from '../utils/calculateWinner';

const Game = () => {
  const [history, setHistory] = useState([
    Array(9).fill({ value: null, disabled: false }),
  ]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState('');
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    squares[i] = isXNext
      ? { value: 'X', disabled: true }
      : { value: 'O', disabled: true };
    setIsXNext(!isXNext);
    setStepNumber(historyPoint.length);
    setHistory([...historyPoint, squares]);
  };

  useEffect(() => {
    const winner = calculateWinner(history[stepNumber]);
    if (winner) {
      setWinner(winner);
    }
  }, [history, stepNumber]);

  useEffect(() => {
    if (winner) {
      const updatedHistory = history[stepNumber].map((square, i) => ({
        ...square,
        disabled: true,
      }));
      const historyPoint = history.slice(0, stepNumber);
      historyPoint.push(updatedHistory);
      setHistory([...historyPoint]);
    }
  }, [winner]);

  const onReset = () => {
    setHistory([Array(9).fill({ value: null, disabled: false })]);
    setStepNumber(0);
    setIsXNext(true);
    setWinner('');
  };

  const onRewind = () => {
    if (stepNumber === 0) return;
    const previousMove = history.slice(0, stepNumber);
    setHistory([...previousMove]);
    setStepNumber(stepNumber - 1);
    setIsXNext(!isXNext);
    if (winner) setWinner('');
  };

  return (
    <div data-test='game-component'>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      {!winner && (
        <Message
          hasStarted={history[stepNumber].some((square) => square)}
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
