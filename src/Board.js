import React from "react";
import "./Board.css";

export function BetrayalBoard({ G, ctx, moves }) {
  const mansionLayout = [["Entrnce Hall", "Foyer", "Grand Staircase"]];

  const renderMansionLayout = () => {
    return mansionLayout.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((room, colIndex) => (
          <div key={colIndex} className="board-cell">
            {room}
          </div>
        ))}
      </div>
    ));
  };

  return <div className="board">{renderMansionLayout()}</div>;
}
