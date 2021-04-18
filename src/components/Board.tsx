import React from 'react';
import Square from './Square';

type SquareValue = 'X' | 'O' | null;
interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div data-test='board-component'>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
