import { Client } from "boardgame.io/react";
import { Betrayal } from "./Game";
import { BetrayalBoard } from "./Board";

const App = Client({
  game: Betrayal,
  board: BetrayalBoard,
});

export default App;
