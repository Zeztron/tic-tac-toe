import React from 'react';

type SquareValue = 'X' | 'O' | null;
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  index: number;
  disabled: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, index, disabled }) => {
  const style = value ? `squares ${value}` : 'squares';

  return (
    <button
      disabled={disabled}
      data-test={`square-button-${index}`}
      onClick={onClick}
      className={style}
    >
      {value}
    </button>
  );
};

export default Square;
