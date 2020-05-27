import React from "react";
import Cell from "./Cell";

const Grid = ({ generation, size }) => {
  // CSS grid determines the shape of the grid,
  // so we can flatten our generation 2d array
  // and the grid will take take of placing each
  // item in the correct row

  const flattenedGen = generation.flat();
  flattenedGen[10] = true;

  const styles = {
    display: "grid",
    height: "100vh",
    gridTemplateColumns: `repeat(${size}, calc((100%/${size}) - 1px))`,
    gridTemplateRows: `repeat(${size}, calc((100%/${size}) - 1px))`,
    gridGap: "1px",
  };

  return (
    <div style={styles}>
      {flattenedGen.map((cell, index) => (
        <Cell key={index} alive={cell} />
      ))}
    </div>
  );
};

export default Grid;
