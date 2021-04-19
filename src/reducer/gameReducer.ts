export const gameState = {
  history: [Array(9).fill({ value: null, disabled: false })],
  isXNext: true,
  winner: '',
  stepNumber: 0,
};

export const gameReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'CLICK':
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
    case 'RESET':
      return gameState;
    case 'REWIND':
      if (state.stepNumber === 0) return state;
      const previousMove = state.history.slice(0, state.stepNumber);
      return {
        ...state,
        history: [...previousMove],
        stepNumber: state.stepNumber - 1,
        isXNext: !state.isXNext,
      };
    case 'DISABLE':
      const updatedHistory = state.history[state.stepNumber].map(
        (square: any, i: any) => ({
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
    case 'WINNER':
      return {
        ...state,
        winner: action.winner,
      };

    default:
      return state;
  }
};
