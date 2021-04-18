import { calculateWinner } from './calculateWinner';

describe('calculateWinner helper function', () => {
  it('returns null if there is no winner', () => {
    expect(
      calculateWinner([null, null, null, null, null, null, null, null, null])
    ).toEqual(null);
  });

  it('returns X if the winner is X', () => {
    expect(
      calculateWinner(['X', 'X', 'X', null, 'O', 'X', 'O', null, 'O'])
    ).toEqual('X');
  });

  it('returns O if the winner is O', () => {
    expect(
      calculateWinner(['O', null, 'X', 'X', 'O', null, 'O', 'X', 'O'])
    ).toEqual('O');
  });
});
