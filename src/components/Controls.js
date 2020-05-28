import React from "react";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  justifyContent: "space-between",
};

const Controls = ({ setControls, stepOneGen, currentGen }) => {
  return (
    <div style={styles}>
      <span>Generation: {currentGen || 0}</span>
      <button onClick={stepOneGen}>Step</button>
      <label>
        Grid size:
        <select>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25" selected>
            25
          </option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </label>
      <label>
        Speed: <input type="number" value="0"></input> / per second
      </label>
    </div>
  );
};

export default Controls;
