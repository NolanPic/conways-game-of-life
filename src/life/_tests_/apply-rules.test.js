import applyRulesToDetermineCellState from "../apply-rules";

test("an alive cell with one or no alive neighbors should die", () => {
  // no alive neighbors
  const grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];

  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(0);

  // test for one alive neighbor
  grid[0][0] = 1;
  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(0);
});

test("two alive neighbors should keep an already alive cell alive", () => {
  const grid = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];

  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(1);
});

test("a dead cell remains dead with two alive neighbors", () => {
  const grid = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 1, 0],
  ];

  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(0);
});

test("a dead cell with 3 alive neighbors should come to life", () => {
  const grid = [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ];

  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(1);
});

test("an alive cell with more than 3 alive neighbors should die", () => {
  const grid = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ];

  expect(applyRulesToDetermineCellState(grid, 1, 1)).toBe(0);
});
