import React from 'react';

interface RewindProps {
  rewind: () => void;
}

const Rewind: React.FC<RewindProps> = ({ rewind }) => {
  return (
    <div>
      <button data-test='rewind-component' type='button' onClick={rewind}>
        Rewind
      </button>
    </div>
  );
};

export default Rewind;
