import React, { useState } from "react";
import "./Board.css";
import Character from "./Character";

export function BetrayalBoard({ G, ctx, moves }) {
  const mansionLayout = [["Entrance Hall", "Foyer", "Grand Staircase"]];

  const [characterPosition, setCharacterPosition] = useState({ row: 0, col: 0 });

  const moveCharacter = (row, col) => {
    setCharacterPosition({ row, col });
  };

  const renderMansionLayout = () => {
    return mansionLayout.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((room, colIndex) => (
          <div key={colIndex} className="board-cell">
            {room === "Entrance Hall" && <Character position={characterPosition} />}
            {room}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="board">
      {renderMansionLayout()}
      <Character />
    </div>
  );
}
