import { Player } from "./index.js";

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function printPlayers(playersArray) {
    playersArray.forEach(player => {
        console.log(player.getSummary());
    });
}