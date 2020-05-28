import React from "react";

const Cell = ({ alive, index, toggleCell }) => {
  const styles = {
    backgroundColor: alive === 1 ? "#5880B5" : "#8CADBF",
    borderRadius: alive ? "10%" : "0%",
  };

  return <div style={styles} onClick={() => toggleCell(index)}></div>;
};

export default Cell;
