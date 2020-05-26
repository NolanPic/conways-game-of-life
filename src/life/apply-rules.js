// applies the rules of Game of Life to a single cell

/**
 * Takes a two-dimensional array and applies the
 * rules of life to one cell of the array.
 * @param {Array} grid - The two-dimensional array
 * @param {number} row - The vertical axis of the cell you are applying the rule to
 * @param {number} column - The horizontal axis of the cell you are applying the rule to
 */
export default function applyRulesToDetermineCellState(grid, row, column) {
  // get the current cell
  const cell = grid[row][column];
  const cellIsAlive = cell === 1;

  // get a count of the cell's live neighbors.
  // The value of the cell will be true/false,
  // indicating alive or dead.
  const aliveNeighbors = getAliveNeighborCount(grid, row, column);

  // if cell is alive and it has two or three neighbors,
  if (cellIsAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
    // ... it remains alive ...
    return 1;
  }
  // if the cell is dead and has exactly three neighbors,
  else if (!cellIsAlive && aliveNeighbors === 3) {
    // ... it comes to life ...
    return 1;
  } else {
    // ... otherwise it becomes or remains dead
    return 0;
  }
}

function getAliveNeighborCount(grid, row, column) {
  // > o o o
  //   o x o
  //   o o o
  const topLeft = getCellIfExists(grid, row - 1, column - 1);

  //   V
  // o o o
  // o x o
  // o o o
  const topMiddle = getCellIfExists(grid, row - 1, column);

  // o o o <
  // o x o
  // o o o
  const topRight = getCellIfExists(grid, row - 1, column + 1);

  //   o o o
  // > o x o
  //   o o o
  const immediateLeft = getCellIfExists(grid, row, column - 1);

  // o o o
  // o x o <
  // o o o
  const immediateRight = getCellIfExists(grid, row, column + 1);

  //   o o o
  //   o x o
  // > o o o
  const bottomLeft = getCellIfExists(grid, row + 1, column - 1);

  // o o o
  // o x o
  // o o o
  //   ^
  const bottomMiddle = getCellIfExists(grid, row + 1, column);

  // o o o
  // o x o
  // o o o <
  const bottomRight = getCellIfExists(grid, row + 1, column + 1);

  const aliveNeighbors = [
    topLeft,
    topMiddle,
    topRight,
    immediateLeft,
    immediateRight,
    bottomLeft,
    bottomMiddle,
    bottomRight,
  ].reduce((acc, val) => {
    // count if value of cell is 1
    if (val === 1) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return aliveNeighbors;
}

function getCellIfExists(grid, row, column) {
  if (grid[row]) {
    if (grid[row][column]) {
      return grid[row][column];
    }
  }
  return false;
}
