export type SquareValue = 'X' | 'O' | null;

export type Action =
  | { type: 'CLICK'; index: number }
  | { type: 'RESET' }
  | { type: 'REWIND' }
  | { type: 'DISABLE' }
  | { type: 'WINNER'; winner: string | null };

export interface ISquare {
  value: SquareValue;
  disabled: boolean;
}
