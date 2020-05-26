import createEmptyGrid from "../create-empty-grid";

test("creates a 0-length grid (array)", () => {
  const grid = createEmptyGrid(0);
  expect(grid.length).toBe(0);
});

test("creates a 25x25 grid", () => {
  const grid = createEmptyGrid(25);

  expect(grid.length).toBe(25);
  expect(grid[0].length).toBe(25);
});

test("creates a 1000x1000 grid", () => {
  const grid = createEmptyGrid(1000);
  expect(grid.length).toBe(1000);
  expect(grid[0].length).toBe(1000);
});
