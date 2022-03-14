import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import handleNextPosition from "../../contexts/canvas/helpers";

export default function useHeroMoviment(initialPosition) {
  const [heroPosition, setHeroPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: KeyboardEvent): void => {
    const direction = event.key as EDirection;
    const nextMoviment = handleNextPosition(direction, heroPosition);
    setHeroPosition(nextMoviment);
    setDirection(direction);
  });

  return {
    heroPosition: heroPosition,
    direction: direction,
  };
}
