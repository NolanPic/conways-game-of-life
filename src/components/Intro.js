import React, { useState } from "react";
import Btn from "./Btn";

const modalBackdrop = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "grid",
  justifyContent: "center",
};

const modal = {
  width: "400px",
  maxHeight: "650px",
  backgroundColor: "#5880B5",
  marginTop: "4rem",
  padding: "1.5rem",
  border: "3px dashed black",
  overflow: "auto",
};

const header = {
  display: "grid",
  justifyContent: "end",
};

const exit = {
  cursor: "pointer",
  //   margin: "0.5rem 1rem 0 0",
  fontSize: "2.5rem",
};

const body = {
  textAlign: "center",
  fontSize: "1.5rem",
};

const heading = {
  fontSize: "1.5em",
};

const listItem = {
  paddingBottom: "1rem",
};

const Intro = () => {
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(false);
  };

  return open ? (
    <div style={modalBackdrop}>
      <div style={modal}>
        <div style={header}>
          <span style={exit} onClick={close}>
            X
          </span>
        </div>
        <div style={body}>
          <h1 style={heading}>John Conway's Game of Life</h1>
          <p>
            The Game of Life is a simple, yet complex thing. Each cell on the
            grid can be either alive or dead. As time progresses, a few simple
            rules determine what will happen--though you might be surprised by
            the results!
          </p>
          <h2 style={heading}>The Rules</h2>
          <p>
            <ol>
              <li style={listItem}>
                An alive cell must have two or three live neighbors to survive
                (no more! no less!)
              </li>
              <li style={listItem}>
                A dead cell with three live neighbors comes alive
              </li>
              <li style={listItem}>
                A cell in any other condition will die or stay dead
              </li>
            </ol>
          </p>
          <Btn onClick={close}>Got it!</Btn>
        </div>
      </div>
    </div>
  ) : null;
};

export default Intro;
