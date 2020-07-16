import React, { useEffect, useState } from "react";
import Intro from "../components/Intro";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import generate from "./generate";

const defaultOptions = {
  gridSize: 25,
  speed: 5, // iterations per second
};

const Main = ({ options }) => {
  if (!options) {
    options = defaultOptions;
  }

  // the current generation
  const [generation, setGeneration] = useState(null);

  // the count of generations
  const [genCount, setGenCount] = useState(0);

  // the size of the grid (25x25, etc.)
  const [gridSize, setGridSize] = useState(options.gridSize);

  // iterations per second
  const [speed, setSpeed] = useState(options.speed);

  // whether the game is playing or stopped
  const [isPlaying, setIsPlaying] = useState(false);

  /**
   * Steps one generation forward
   */
  const stepOneGen = () => {
    setGeneration(generate(generation, gridSize));
    setGenCount(genCount + 1);
  };

  /**
   * Toggles a cell alive or dead when it's clicked/tapped
   * @param {string} cellIndexStr -  A string representing the index of the cell "0-0", "1-3", etc.
   */
  const toggleCell = (cellIndexStr) => {
    if (!isPlaying) {
      // copy the grid
      const newGrid = [...generation];
      // get cell
      const row = parseInt(cellIndexStr.split("-")[0]);
      const column = parseInt(cellIndexStr.split("-")[1]);
      const cell = newGrid[row][column];
      if (cell === 0) {
        // turn it on
        newGrid[row][column] = 1;
      } else {
        // turn it off
        newGrid[row][column] = 0;
      }

      setGeneration(newGrid);
    }
  };

  /**
   * Resets the grid to a fresh state
   */
  const reset = () => {
    setIsPlaying(false);
    setGeneration(generate(null, gridSize));
    setGenCount(0);
  };

  // changing the grid size
  useEffect(() => {
    // pass in null to reset the grid
    const newGeneration = generate(null, gridSize);

    // Add a glider
    newGeneration[0][1] = 1;
    newGeneration[1][2] = 1;
    newGeneration[2][0] = 1;
    newGeneration[2][1] = 1;
    newGeneration[2][2] = 1;

    setGeneration(newGeneration);
    setGenCount(0);
  }, [gridSize]);

  // main game loop
  useEffect(() => {
    let gameLoop = null;
    // if the speed is set to an actual value and the game is playing,
    if (speed > 0 && isPlaying) {
      gameLoop = setInterval(() => {
        stepOneGen();
      }, 1000 / speed);
    }

    return () => clearTimeout(gameLoop);
  });

  return (
    <>
      <Intro />
      <Controls
        isPlaying={isPlaying}
        currentGen={genCount}
        currentSpeed={speed}
        setGridSize={setGridSize}
        setSpeed={setSpeed}
        setIsPlaying={setIsPlaying}
        stepOneGen={stepOneGen}
        reset={reset}
      />
      {generation && (
        <Grid generation={generation} size={gridSize} toggleCell={toggleCell} />
      )}
    </>
  );
};

export default Main;
