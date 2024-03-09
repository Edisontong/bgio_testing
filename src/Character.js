import React from "react";
import "./Character.css";

function Character({ position }) {
  if (!position) return null;

  const { row, col } = position;

  return <div className="character" style={{ gridColumn: col + 1, gridRow: row + 1 }}></div>;
}

export default Character;
