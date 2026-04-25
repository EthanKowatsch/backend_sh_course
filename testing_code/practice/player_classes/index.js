import { getRandomNumber, printPlayers } from "./helper.js";

// Array to store players season totals
let playersArray = [];

/**
 * Player class
 */
export class Player {
    constructor(name, goals = 0, assists = 0) {
        this.name = name;
        this.goals = goals;
        this.assists = assists;
    }

    addGoal() {
        this.goals += 1;
    }

    addAssist() {
        this.assists += 1;
    }

    getSummary() {
        return `Player Name: ${this.name} | Goals: ${this.goals} | Assists: ${this.assists} | Total Points: ${this.goals + this.assists}`;
    }
}

playersArray.push(new Player("Ethan"));
playersArray.push(new Player("John"));

// Generate random end of season totals for 10 games
for(let i = 0; i < 10; i++) {
    let randomPlayerIndex = getRandomNumber(0, playersArray.length - 1);

    let randomAction = getRandomNumber(0, 1);

    // 0 is goal, 1 is assist
    if(randomAction === 0) {
        playersArray[randomPlayerIndex].addGoal();
    }
    else {
        playersArray[randomPlayerIndex].addAssist();
    }
}

printPlayers(playersArray);