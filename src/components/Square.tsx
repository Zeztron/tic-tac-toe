import React from 'react';

type SquareValue = 'X' | 'O' | null;
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  index: number;
}

const Square: React.FC<SquareProps> = ({ value, onClick, index }) => {
  const style = value ? `squares ${value}` : 'squares';

  return (
    <button
      data-test={`square-button-${index}`}
      onClick={onClick}
      className={style}
    >
      {value}
    </button>
  );
};

export default Square;
