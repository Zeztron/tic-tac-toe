import React from 'react';

interface MessageProps {
  hasStarted: boolean;
  isXNext: boolean;
}

const Message: React.FC<MessageProps> = ({ hasStarted, isXNext }) => {
  const message = hasStarted
    ? isXNext
      ? "It's X's Turn"
      : "It's O's Turn"
    : 'Click To Start Game';

  return (
    <div data-test='message-component' className='message'>
      <h2>{message}</h2>
    </div>
  );
};

export default Message;
