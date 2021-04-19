import * as actionTypes from './actionTypes';

type SquareValue = 'X' | 'O' | null;
type Action =
  | { type: 'CLICK'; index: number }
  | { type: 'RESET' }
  | { type: 'REWIND' }
  | { type: 'DISABLE' }
  | { type: 'WINNER'; winner: string | null };

export interface Square {
  value: SquareValue;
  disabled: boolean;
}

interface State {
  history: Square[][];
  isXNext: boolean;
  winner: string | null;
  stepNumber: number;
}

export const gameState: State = {
  history: [Array(9).fill({ value: null, disabled: false })],
  isXNext: true,
  winner: '',
  stepNumber: 0,
};

export const gameReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.CLICK:
      const historyPoint = state.history.slice(0, state.stepNumber + 1);
      const current = historyPoint[state.stepNumber];
      const squares = [...current];
      squares[action.index] = state.isXNext
        ? { value: 'X', disabled: true }
        : { value: 'O', disabled: true };
      return {
        ...state,
        history: [...historyPoint, squares],
        stepNumber: historyPoint.length,
        isXNext: !state.isXNext,
      };
    case actionTypes.RESET:
      return gameState;
    case actionTypes.REWIND:
      if (state.stepNumber === 0) return state;
      const previousMove = state.history.slice(0, state.stepNumber);
      return {
        ...state,
        history: [...previousMove],
        stepNumber: state.stepNumber - 1,
        isXNext: !state.isXNext,
      };
    case actionTypes.DISABLE:
      const updatedHistory = state.history[state.stepNumber].map(
        (square: Square) => ({
          ...square,
          disabled: true,
        })
      );
      const moves = state.history.slice(0, state.stepNumber);
      moves.push(updatedHistory);
      return {
        ...state,
        history: [...moves],
      };
    case actionTypes.WINNER:
      return {
        ...state,
        winner: action.winner,
      };

    default:
      return state;
  }
};
