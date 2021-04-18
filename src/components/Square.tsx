import React from 'react';

type SquareValue = 'X' | 'O' | null;
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button data-test='square-button' onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
