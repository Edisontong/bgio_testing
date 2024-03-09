import React, { useState, useEffect } from "react";
import "./Character.css";

function Character({ mansionLayout }) {
  const [position, setPosition] = useState({ row: 0, col: 0 });

  useEffect(() => {
    console.log("Position:", position);
    const handleKeyDown = (e) => {
      const { key } = e;
      let newRow = position.row;
      let newCol = position.col;

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

      setPosition({ row: newRow, col: newCol });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, mansionLayout]);

  return <div className="character" style={{ gridColumn: position.col + 1, gridRow: position.row + 1 }}></div>;
}

export default Character;
