import React from "react";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  justifyContent: "space-between",
};

const Controls = ({
  isPlaying,
  setIsPlaying,
  setGridSize,
  currentSpeed,
  setSpeed,
  stepOneGen,
  currentGen,
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
        / per second
      </label>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Start"}
      </button>
      <button onClick={stepOneGen}>Step</button>
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
    </div>
  );
};

export default Controls;
