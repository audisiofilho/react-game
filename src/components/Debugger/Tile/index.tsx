import React from "react";
import { ECanvas } from "../../../contexts/canvas/helpers";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

export default function Tile(props: IProps) {
  function getTileColor() {
    switch (props.text) {
      case ECanvas.FLOOR:
        return "darkgrey";

      case ECanvas.WALL:
        return "yellow";

      case ECanvas.HERO:
        return "magenta";

      case ECanvas.DOOR:
        return "white";

      case ECanvas.TRAP:
        return "chartreuse";

      case ECanvas.MINI_DEMON:
      case ECanvas.DEMON:
        return "red";
      
      case ECanvas.CHEST:
        return "cyan";
    }
  }
  const color = getTileColor();
  return (
    <div
      style={{
        position: "absolute",
        width: TILE_SIZE,
        height: TILE_SIZE,
        top: TILE_SIZE * props.position.y,
        left: TILE_SIZE * props.position.x,
        color: color,
        border: `2px solid ${color}`,
        fontSize: 32,
        zIndex: 2
      }}
    >
      {props.text}
    </div>
  );
}
