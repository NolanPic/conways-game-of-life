import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import generate from "./generate";

const defaultOptions = {
  gridSize: 25,
  speed: 1, // iterations per second (default is off)
};

const Main = ({ options, genCount, setGenCount }) => {
  if (!options) {
    options = defaultOptions;
  }

  const newGeneration = generate(null, options.gridSize);
  // TESTING

  newGeneration[0][1] = 1;
  newGeneration[1][2] = 1;
  newGeneration[2][0] = 1;
  newGeneration[2][1] = 1;
  newGeneration[2][2] = 1;

  const [generation, setGeneration] = useState(newGeneration);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      console.log("generation", generation);
      setGeneration(generate(generation, options.gridSize));
      setGenCount(genCount + 1);
    }, 1000 / options.speed);

    return () => clearTimeout(gameLoop);
  });

  return <Grid generation={generation} size={options.gridSize} />;
};

export default Main;
