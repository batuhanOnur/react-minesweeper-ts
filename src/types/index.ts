export enum CellValue {
  none, //default value = 0
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb //bomb value default = 9
}

export enum CellState {
  open,
  visible,
  flagged
}

export type Cell = { value: CellValue; state: CellState };
