import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";

import "./index.css";


interface IProps {
  initialPosition:{x: number; y: number}
}

const MiniDemon = (props: IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);
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
        top: TILE_SIZE * moviment.enemyPosition.y,
        left: TILE_SIZE * moviment.enemyPosition.x,
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default MiniDemon;
