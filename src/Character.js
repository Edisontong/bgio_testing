import React, { useState, useEffect } from "react";
import "./Character.css";

function Character({ mansionLayout }) {
  const [position, setPosition] = useState({ room: "Entrance Hall" }); // Set initial position to "Entrance Hall"

  useEffect(() => {
    console.log(position);
    const handleKeyDown = (e) => {
      const { key } = e;
      let newRoom = position.room;

      switch (key) {
        case "ArrowUp":
          newRoom = moveUp(mansionLayout, newRoom);
          break;
        case "ArrowDown":
          newRoom = moveDown(mansionLayout, newRoom);
          break;
        case "ArrowLeft":
          newRoom = moveLeft(mansionLayout, newRoom);
          break;
        case "ArrowRight":
          newRoom = moveRight(mansionLayout, newRoom);
          break;
        default:
          return;
      }

      setPosition({ room: newRoom });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position, mansionLayout]);

  // Helper functions to determine the new room based on arrow key presses
  const moveUp = (layout, currentRoom) => {
    const rowIndex = layout.findIndex((row) => row.includes(currentRoom));
    const colIndex = layout[rowIndex].indexOf(currentRoom);
    if (rowIndex > 0) {
      return layout[rowIndex - 1][colIndex];
    }
    return currentRoom;
  };

  const moveDown = (layout, currentRoom) => {
    const rowIndex = layout.findIndex((row) => row.includes(currentRoom));
    const colIndex = layout[rowIndex].indexOf(currentRoom);
    if (rowIndex < layout.length - 1) {
      return layout[rowIndex + 1][colIndex];
    }
    return currentRoom;
  };

  const moveLeft = (layout, currentRoom) => {
    const rowIndex = layout.findIndex((row) => row.includes(currentRoom));
    const colIndex = layout[rowIndex].indexOf(currentRoom);
    if (colIndex > 0) {
      return layout[rowIndex][colIndex - 1];
    }
    return currentRoom;
  };

  const moveRight = (layout, currentRoom) => {
    const rowIndex = layout.findIndex((row) => row.includes(currentRoom));
    const colIndex = layout[rowIndex].indexOf(currentRoom);
    if (colIndex < layout[rowIndex].length - 1) {
      return layout[rowIndex][colIndex + 1];
    }
    return currentRoom;
  };

  return <div className="character" style={{ gridColumn: position.col + 1, gridRow: position.row + 1 }}></div>;
}

export default Character;
