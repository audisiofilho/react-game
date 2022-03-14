import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { TILE_SIZE, HEAD_OFFSET } from "../../settings/constants";

import "./index.css";

const Hero = () => {
  const [heroPosition, setHeroPosition] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState("RIGHT");

  useEventListener("keydown", (event: KeyboardEvent): void => {
    if (event.key === "ArrowLeft") {
      setHeroPosition({
        x: heroPosition.x - 1,
        y: heroPosition.y,
      });
      setDirection("LEFT");
    } else if (event.key === "ArrowRight") {
      setHeroPosition({
        x: heroPosition.x + 1,
        y: heroPosition.y,
      });
      setDirection("RIGHT");
    } else if (event.key === "ArrowUp") {
      setHeroPosition({
        x: heroPosition.x,
        y: heroPosition.y + 1,
      });
    } else if (event.key === "ArrowDown") {
      setHeroPosition({
        x: heroPosition.x,
        y: heroPosition.y - 1,
      });
    }
  });

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
        bottom: TILE_SIZE * heroPosition.y,
        left: TILE_SIZE * heroPosition.x,
        transform: `scaleX(${direction === "RIGHT" ? 1 : -1})`,
      }}
    />
  );
};

export default Hero;
