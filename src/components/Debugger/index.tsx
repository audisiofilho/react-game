import React from "react";
import { canvas } from "../../contexts/canvas/helpers";
import Tile from "./Tile";

function getCanvasMap() {
  const tileArray = [];
  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      tileArray.push(<Tile key={key} position={position} text={text} />);
    }
  }

  return tileArray;
}

export default function Debugger() {
  const tiles = getCanvasMap();

  return (
    <div>
      {tiles}
    </div>
  );
}
