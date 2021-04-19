import React from 'react';
import { ISquare } from '../tic-tac-toe';
import Square from './Square';

interface BoardProps {
  squares: ISquare[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div data-test='board-component' className='board'>
      {squares.map((square, i) => (
        <Square
          disabled={square.disabled}
          key={i}
          index={i}
          value={square.value}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};

export default Board;
