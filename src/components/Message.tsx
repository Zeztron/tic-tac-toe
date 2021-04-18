import React from 'react';

interface MessageProps {
  hasStarted: boolean;
  isXNext: boolean;
}

const Message: React.FC<MessageProps> = ({ hasStarted, isXNext }) => {
  return (
    <div data-test='message-component'>
      {!hasStarted ? 'Click To Start Game' : ''}
    </div>
  );
};

export default Message;
