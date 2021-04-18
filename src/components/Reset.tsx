import React from 'react';

interface ResetProps {
  reset: () => void;
}

const Reset: React.FC<ResetProps> = ({ reset }) => {
  return (
    <div>
      <button
        data-test='reset-component'
        type='button'
        onClick={reset}
        className='reset-button'
      >
        <i className='fas fa-fast-backward'></i> Reset
      </button>
    </div>
  );
};

export default Reset;
