import React from 'react';

interface AnnouncementProps {
  winner: string;
}

const Announcement: React.FC<AnnouncementProps> = ({ winner }) => {
  return (
    <div data-test='announcement-component'>
      {winner === 'Tie' ? (
        <div>
          <h2>It's a Tie!</h2>
        </div>
      ) : (
        <div>
          <h2>{winner} Wins!</h2>
        </div>
      )}
    </div>
  );
};

export default Announcement;
