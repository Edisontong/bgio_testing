import React from "react";
import "./Board.css";
import Character from "./Character";

export function BetrayalBoard() {
  const mansionLayout = [["Entrance Hall", "Foyer", "Grand Staircase"]];

  return (
    <div className="board">
      {mansionLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((room, colIndex) => (
            <div key={colIndex} className="board-cell">
              {room === "Entrance Hall" && <Character mansionLayout={mansionLayout} />}
              {room}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
