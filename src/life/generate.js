// creates the next generation

import createEmptyGrid from "./create-empty-grid";
import applyRulesToDetermineCellState from "./apply-rules";

/**
 * Takes the current generation grid and generates
 * the next
 * @param {Array} currentGen - The current generation represented by a 2d array
 * @param {Number} size - The size of the grid
 */
export default function generate(currentGen, size) {
  // set up a grid for our next generation
  const nextGen = createEmptyGrid(size);

  // if current gen is null or empty, then
  // this is the beginning of the game,
  // or the grid size is being changed
  if (!currentGen || !currentGen.length) {
    return nextGen;
  }

  // loop thru every cell and apply the rules
  for (let i = 0; i < currentGen.length; i++) {
    for (let j = 0; j < currentGen[i].length; j++) {
      nextGen[i][j] = applyRulesToDetermineCellState(currentGen, i, j);
    }
  }

  return nextGen;
}
