import { calculateWinner } from './calculateWinner';

describe('calculateWinner helper function', () => {
  it('returns null if there is no winner', () => {
    expect(
      calculateWinner([null, null, null, null, null, null, null, null, null])
    ).toEqual(null);
  });

  it('returns X if the winner is X', () => {
    expect(
      calculateWinner(['X', 'X', 'X', 'O', 'O', 'X', 'O', 'X', 'O'])
    ).toEqual('X');
  });
});
