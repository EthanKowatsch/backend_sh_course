import { Player } from "./Player.js";
import { loadPlayer, savePlayer } from "./storage.js";

const newPlayer = loadPlayer() || new Player("Ethan Kowatsch");

newPlayer.addAssist();
newPlayer.addGoal();
newPlayer.addGoal();
newPlayer.showSummary();

savePlayer(newPlayer);