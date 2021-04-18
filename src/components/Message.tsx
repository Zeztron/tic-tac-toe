import React from 'react';

interface MessageProps {
  hasStarted: boolean;
  isXNext: boolean;
}

const Message: React.FC<MessageProps> = ({ hasStarted, isXNext }) => {
  return (
    <div data-test='message-component'>
      {hasStarted
        ? isXNext
          ? "It's X's Turn"
          : "It's O's Turn"
        : 'Click To Start Game'}
    </div>
  );
};

export default Message;
