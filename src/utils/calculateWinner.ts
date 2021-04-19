type SquareValue = 'X' | 'O' | null;

type Squares = { value: SquareValue; disabled: boolean }[];

/**
 * Helper method that calculates winner with all
 * possible combinations.
 *
 * Using React's official documentation with shows
 * a tutorial with tic-tac-toe:
 *
 * https://reactjs.org/tutorial/tutorial.html
 * @param squares {SquareValue[]}
 * @returns {SquareValue} | 'Tie'
 */
export function calculateWinner(squares: Squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner = lines.reduce((square: SquareValue | 'Tie', [a, b, c]) => {
    if (
      squares[a].value &&
      squares[a].value === squares[b].value &&
      squares[b].value === squares[c].value
    ) {
      square = squares[a].value;
    }

    return square;
  }, null);

  if (!winner && squares.every((square) => square.value)) winner = 'Tie';

  return winner;
}
