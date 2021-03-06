import { Action, ISquare } from '../tic-tac-toe';
import * as actionTypes from './actionTypes';
interface State {
  history: ISquare[][];
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

/**
 * Reducer function that takes in current state and an action
 * and returns a new state based on the action argument.
 * @param state - Containing the initial and current state.
 * @param action - Action object.
 * @returns {State} - Modified state.
 */
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
        (square: ISquare) => ({
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
