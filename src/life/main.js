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

  // The initial generation
  const newGeneration = generate(null, options.gridSize);
  // TESTING

  newGeneration[0][1] = 1;
  newGeneration[1][2] = 1;
  newGeneration[2][0] = 1;
  newGeneration[2][1] = 1;
  newGeneration[2][2] = 1;

  const [generation, setGeneration] = useState(newGeneration);
  const [genCount, setGenCount] = useState(0);
  const [gridSize, setGridSize] = useState(options.gridSize);
  const [speed, setSpeed] = useState(options.speed);
  const [isPlaying, setIsPlaying] = useState(false);

  const stepOneGen = () => {
    setGeneration(generate(generation, options.gridSize));
    setGenCount(genCount + 1);
  };

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
      />
      <Grid generation={generation} size={gridSize} />
    </>
  );
};

export default Main;
