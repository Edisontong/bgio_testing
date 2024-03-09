import React, { useState, useEffect, useMemo } from "react";
import "./Board.css";
import Character from "./Character";

export function BetrayalBoard({ G, ctx, moves }) {
  const mansionLayout = useMemo(() => [["Entrance Hall", "Foyer", "Grand Staircase"]], []);
  const [characterPosition, setCharacterPosition] = useState({ row: 0, col: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;
      let newRow = characterPosition.row;
      let newCol = characterPosition.col;

      // Update character's position based on arrow key pressed
      switch (key) {
        case "ArrowUp":
          newRow = Math.max(0, newRow - 1);
          break;
        case "ArrowDown":
          newRow = Math.min(mansionLayout.length - 1, newRow + 1);
          break;
        case "ArrowLeft":
          newCol = Math.max(0, newCol - 1);
          break;
        case "ArrowRight":
          newCol = Math.min(mansionLayout[0].length - 1, newCol + 1);
          break;
        default:
          return;
      }

      setCharacterPosition({ row: newRow, col: newCol });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [characterPosition, mansionLayout]);

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

  return <div className="board">{renderMansionLayout()}</div>;
}
