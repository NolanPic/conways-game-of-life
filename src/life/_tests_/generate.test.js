import generate from "../generate";

test("a blinker blinks", () => {
  const blinker = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];

  expect(generate(blinker, 3)).toStrictEqual([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]);

  const blinkerNextState = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ];

  expect(generate(blinkerNextState, 3)).toStrictEqual(blinker);
});

test("a four-cell block does nothing", () => {
  const block = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];

  expect(generate(block, 3)).toStrictEqual([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ]);
});

test("a beacon does some beaconing", () => {
  const beacon = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 1],
  ];

  expect(generate(beacon, 4)).toStrictEqual([
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ]);

  const beaconNextState = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ];
  expect(generate(beaconNextState, 4)).toStrictEqual(beacon);
});

test("a glider glides", () => {
  const glider = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const gliderState2 = [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const gliderState3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const gliderState4 = [
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const gliderState5 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ];

  const gliderState6 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ];

  expect(generate(glider, 5)).toStrictEqual(gliderState2);
  expect(generate(gliderState2, 5)).toStrictEqual(gliderState3);
  expect(generate(gliderState3, 5)).toStrictEqual(gliderState4);
  expect(generate(gliderState4, 5)).toStrictEqual(gliderState5);
  expect(generate(gliderState5, 5)).toStrictEqual(gliderState6);
});
