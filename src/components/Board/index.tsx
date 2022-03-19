import React from "react";
import { GAME_SIZE } from "../../settings/constants";

import Chest from "../Chest";
import Demon from "../Demon";
import Hero from "../Hero";
import MiniDemon from "../MiniDemon";
import Trap from "../Trap";

const Board = () => {
  return (
    <div>
      <MiniDemon initialPosition={{x: 10, y: 10}}/>
      <MiniDemon initialPosition={{x: 10, y: 8}}/>
      <Demon />
      <Chest />
      <Trap />
      <Hero />
      <img
        src="./assets/tileset.gif"
        alt="board"
        width={GAME_SIZE}
        height={GAME_SIZE}
      />
    </div>
  );
};

export default Board;
