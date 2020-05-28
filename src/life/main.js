import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Controls from "../components/Controls";
import generate from "./generate";

const defaultOptions = {
  gridSize: 25,
  speed: 0, // iterations per second (default is off)
};

const Main = ({ options }) => {
  if (!options) {
    options = defaultOptions;
  }

  const [generation, setGeneration] = useState(null);
  const [genCount, setGenCount] = useState(0);
  const [gridSize, setGridSize] = useState(options.gridSize);
  const [speed, setSpeed] = useState(options.speed);
  const [isPlaying, setIsPlaying] = useState(false);

  const stepOneGen = () => {
    setGeneration(generate(generation, gridSize));
    setGenCount(genCount + 1);
  };

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

  const reset = () => {
    setIsPlaying(false);
    setGeneration(generate(null, gridSize));
    setGenCount(0);
  };

  // changing the grid size
  useEffect(() => {
    // pass in null to reset the grid
    const newGeneration = generate(null, gridSize);

    // TESTING
    newGeneration[0][1] = 1;
    newGeneration[1][2] = 1;
    newGeneration[2][0] = 1;
    newGeneration[2][1] = 1;
    newGeneration[2][2] = 1;
    // TESTING

    setGeneration(newGeneration);
  }, [gridSize]);

  // main game loop
  useEffect(() => {
    let gameLoop = null;
    if (speed > 0 && isPlaying) {
      gameLoop = setInterval(() => {
        stepOneGen();
      }, 1000 / speed);
    }

    return () => clearTimeout(gameLoop);
  });

  return (
    <>
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
