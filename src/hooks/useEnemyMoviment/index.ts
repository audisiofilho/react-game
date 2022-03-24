import React, { useState } from "react";
import useInterval from "@use-it/interval";
import { EDirection } from "../../settings/constants";
import {
  checkValidMoviment,
  handleNextPosition,
} from "../../contexts/canvas/helpers";

export default function useEnemyMoviment(initialPosition) {
  const [enemyPosition, setEnemyPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    var random = Math.floor(Math.random() * 4);
    var directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextMoviment = handleNextPosition(randomDirection, enemyPosition);
    const isValidMoviment = checkValidMoviment(nextMoviment);

    if (isValidMoviment) {
      setEnemyPosition(nextMoviment);
      setDirection(randomDirection);
    }
  }, 2000);

  return {
    enemyPosition: enemyPosition,
    direction: direction,
  };
}
