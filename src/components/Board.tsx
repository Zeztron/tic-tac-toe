import React from 'react';
import Square from './Square';

type SquareValue = 'X' | 'O' | null;
interface BoardProps {
  squares: { value: SquareValue; disabled: boolean }[];
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
