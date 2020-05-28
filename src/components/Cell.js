import React from "react";

const Cell = ({ alive, index, toggleCell }) => {
  const styles = {
    backgroundColor: alive === 1 ? "green" : "gray",
  };

  return <div style={styles} onClick={() => toggleCell(index)}></div>;
};

export default Cell;
