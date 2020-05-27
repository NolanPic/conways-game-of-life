import React from "react";

const Cell = ({ alive }) => {
  const styles = {
    backgroundColor: alive === true ? "green" : "gray",
  };

  return <div style={styles}></div>;
};

export default Cell;
