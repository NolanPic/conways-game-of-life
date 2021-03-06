import React from "react";
import Cell from "./Cell";

const Grid = ({ generation, size, toggleCell }) => {
  const styles = {
    display: "grid",
    height: "100vh",
    gridTemplateColumns: `repeat(${size}, calc((100%/${size}) - 1px))`,
    gridTemplateRows: `repeat(${size}, calc((100%/${size}) - 1px))`,
    gridGap: "1px",
    backgroundColor: "#9DB4C0",
  };

  return (
    <div style={styles}>
      {generation.map((row, r_index) => {
        return row.map((cell, c_index) => (
          <Cell
            key={`${r_index}-${c_index}`}
            index={`${r_index}-${c_index}`}
            alive={cell}
            toggleCell={toggleCell}
          />
        ));
      })}
    </div>
  );
};

export default Grid;
