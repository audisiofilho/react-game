import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";

import "./index.css";

const MiniDemon = () => {
  const initialPosition = {
    x: 10,
    y: 5,
  };
  const { enemyPosition, direction } = useEnemyMoviment(initialPosition);
  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "mini-demon-animation 1s steps(4) infinite",
        position: "absolute",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        bottom: TILE_SIZE * enemyPosition.y,
        left: TILE_SIZE * enemyPosition.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default MiniDemon;
