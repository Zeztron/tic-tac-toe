import React from 'react';

interface RewindProps {
  rewind: () => void;
}

const Rewind: React.FC<RewindProps> = ({ rewind }) => {
  return (
    <div>
      <button
        data-test='rewind-component'
        type='button'
        onClick={rewind}
        className='rewind-button'
      >
        <i className='fas fa-undo'></i> Rewind
      </button>
    </div>
  );
};

export default Rewind;
