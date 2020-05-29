import React from "react";
import Btn from "./Btn";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "1.5rem",
  paddingLeft: "0.5rem",
  paddingBottom: "0.5rem",
  borderBottom: "2px dashed black",
};

const Controls = ({
  isPlaying,
  setIsPlaying,
  setGridSize,
  currentSpeed,
  setSpeed,
  stepOneGen,
  currentGen,
  reset,
}) => {
  const validateAndSetSpeed = (speed) => {
    if (speed < 0) {
      speed = 0;
    }
    setSpeed(speed);
  };
  return (
    <div style={styles}>
      <span>Generation: {currentGen || 0}</span>
      <label>
        Speed:{" "}
        <input
          type="number"
          value={currentSpeed}
          onChange={(e) => validateAndSetSpeed(e.target.value)}
        ></input>{" "}
        per/s
      </label>
      <div>
        <Btn onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Start"}
        </Btn>
        <Btn onClick={stepOneGen}>Step Once</Btn>
      </div>
      <label>
        Grid size:
        <select
          defaultValue="25"
          onChange={(e) => setGridSize(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </label>
      <Btn onClick={reset}>Reset</Btn>
    </div>
  );
};

export default Controls;
