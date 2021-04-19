import { calculateWinner } from './calculateWinner';

describe('calculateWinner helper function', () => {
  it('returns null if there is no winner', () => {
    expect(
      calculateWinner([
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
        { value: null, disabled: false },
      ])
    ).toEqual(null);
  });

  it('returns X if the winner is X', () => {
    expect(
      calculateWinner([
        { value: 'X', disabled: true },
        { value: 'X', disabled: true },
        { value: 'X', disabled: true },
        { value: null, disabled: false },
        { value: 'O', disabled: true },
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
        { value: null, disabled: false },
        { value: 'O', disabled: true },
      ])
    ).toEqual('X');
  });

  it('returns O if the winner is O', () => {
    expect(
      calculateWinner([
        { value: 'O', disabled: true },
        { value: null, disabled: false },
        { value: 'X', disabled: true },
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
        { value: null, disabled: false },
        { value: 'O', disabled: true },
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
      ])
    ).toEqual('O');
  });

  it('returns Tie if the game is tied', () => {
    expect(
      calculateWinner([
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
        { value: 'X', disabled: true },
        { value: 'X', disabled: true },
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
        { value: 'O', disabled: true },
        { value: 'X', disabled: true },
        { value: 'O', disabled: true },
      ])
    ).toEqual('Tie');
  });
});
