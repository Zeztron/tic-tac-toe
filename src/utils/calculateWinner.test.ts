import { calculateWinner } from './calculateWinner';

describe('calculateWinner helper function', () => {
  it('returns null if there is no winner', () => {
    expect(
      calculateWinner([null, null, null, null, null, null, null, null, null])
    ).toEqual(null);
  });
});
