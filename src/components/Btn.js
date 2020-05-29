import React from "react";

const styles = {
  padding: "0 1rem",
  backgroundColor: "rgb(88, 128, 181)",
  fontFamily: "VT323",
  fontSize: "1.5rem",
  cursor: "pointer",
};

const Btn = ({ onClick, children }) => {
  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
