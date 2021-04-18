import React from 'react';

type SquareValue = 'X' | 'O' | null;
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : 'squares';

  return (
    <button data-test='square-button' onClick={onClick} className={style}>
      {value}
    </button>
  );
};

export default Square;
