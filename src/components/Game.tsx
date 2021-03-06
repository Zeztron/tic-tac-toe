import React, { useEffect, useReducer, useCallback } from 'react';
import Board from './Board';
import Message from './Message';
import Reset from './Reset';
import Rewind from './Rewind';
import Announcement from './Announcement';
import { calculateWinner } from '../utils/calculateWinner';
import { gameState, gameReducer } from '../reducer/gameReducer';
import { ISquare } from '../tic-tac-toe';

const Game: React.FC = () => {
  const [{ history, isXNext, winner, stepNumber }, dispatch] = useReducer(
    gameReducer,
    gameState
  );

  const handleClick = useCallback(
    (index: number) => {
      dispatch({ type: 'CLICK', index });
    },
    [dispatch]
  );

  useEffect(() => {
    const winner = calculateWinner(history[stepNumber]);
    dispatch({ type: 'WINNER', winner });
  }, [history, stepNumber]);

  useEffect(() => {
    if (winner) dispatch({ type: 'DISABLE' });
  }, [winner]);

  const reset = () => dispatch({ type: 'RESET' });
  const rewind = () => dispatch({ type: 'REWIND' });

  return (
    <div data-test='game-component'>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      {!winner && (
        <Message
          hasStarted={history[stepNumber].some((square: ISquare) => square)}
          isXNext={isXNext}
        />
      )}
      {!!winner && <Announcement winner={winner} />}
      <div className='control-buttons'>
        <Rewind rewind={rewind} />
        <Reset reset={reset} />
      </div>
    </div>
  );
};

export default Game;
