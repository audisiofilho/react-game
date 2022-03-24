import React from "react";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from "../../settings/constants";

import "./index.css";

/*

const moviment = {
  position: { x: 5, y: 5},
  direction: EDirection.RIGHT,
};

*/

interface IProps {
  initialPosition: { x:number, y:number}
}

const Demon = (props: IProps) => {

  const moviment = useEnemyMoviment(props.initialPosition);
  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: "demon-animation 1s steps(4) infinite",
        position: "absolute",
        top: TILE_SIZE * moviment.enemyPosition.y,
        left: TILE_SIZE * moviment.enemyPosition.x,
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default Demon;
