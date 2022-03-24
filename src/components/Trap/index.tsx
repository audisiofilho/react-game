import React from "react";
import { TILE_SIZE, HEAD_OFFSET } from "../../settings/constants";

import './index.css';

/*

const moviment = {
  position: { x: 5, y: 5},
  direction: EDirection.RIGHT,
};

*/

interface IProps {
  initialPosition: { x:number, y:number}
}

const Trap = (props: IProps) => {
  return (
    <div
      style={{
        width: TILE_SIZE,
        height: 100,
        backgroundImage: "url(./assets/TRAP.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'trap-animation 1s steps(8) infinite',
        position: "absolute",
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
      }}
    />
  );
};

export default Trap;
