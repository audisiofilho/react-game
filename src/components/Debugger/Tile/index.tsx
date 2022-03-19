import React from "react";
import { TILE_SIZE } from "../../../settings/constants";

interface IProps {
  position: { x: number; y: number };
  text: number;
}

export default function Tile(props: IProps) {
  function getTileColor() {
    switch (props.text) {
      case 0:
        return "yellow";

      case 1:
        return "red";
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
      }}
    >
      {props.text}
    </div>
  );
}
