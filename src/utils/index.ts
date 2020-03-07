import { CellValue, CellState, Cell } from "../types";
import { MAX_COLS, MAX_ROWS } from "./../constants/index";

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = []; // Cell tipinde array

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    //cell içine obje atma
    for (let col = 0; col < MAX_COLS; col++) {
      cells[row].push({
        value: CellValue.none, // bomba için -1, boş için 0
        state: CellState.open
      });
    }
  }

  return cells;
};
