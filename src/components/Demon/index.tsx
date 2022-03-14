import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from "../../settings/constants";

import "./index.css";

const Demon = () => {
  const initialPosition = {
    x: 5,
    y: 5,
  };

  const { enemyPosition, direction } = useEnemyMoviment(initialPosition);
  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "demon-animation 1s steps(4) infinite",
        position: "absolute",
        bottom: TILE_SIZE * enemyPosition.y,
        left: TILE_SIZE * enemyPosition.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default Demon;
