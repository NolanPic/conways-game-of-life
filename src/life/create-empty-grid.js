/**
 * Creates an empty 2d grid array of the specified size
 * @param {Number} size - The size of grid you want to create
 */
export default function createEmptyGrid(size) {
  const grid = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    grid.push(row);
  }

  return grid;
}
