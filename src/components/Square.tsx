import React from 'react';

interface SquareProps {
  value: string;
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
