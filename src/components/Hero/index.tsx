import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";

import "./index.css";
import useHeroMoviment from "../../hooks/useHeroMoviment";

/*

const moviment = {
  position: { x: 5, y: 5},
  direction: EDirection.RIGHT,
};

*/

interface IProps {
  initialPosition: { x:number, y:number}
}

const Hero = (props: IProps) => {
  const {heroPosition, direction} = useHeroMoviment(props.initialPosition);

  
  

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: "hero-animation 1s steps(4) infinite",
        position: "absolute",
        top: TILE_SIZE * heroPosition.y - HEAD_OFFSET,
        left: TILE_SIZE * heroPosition.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default Hero;
