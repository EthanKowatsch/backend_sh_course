class Player {
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
        console.log(`Player Name: ${this.name} | Goals: ${this.goals} | Assists: ${this.assists} | Total Points: ${this.goals + this.assists}`);
    }
}

// Create player instances
let player1 = new Player("Ethan");
let player2 = new Player("John");

player1.addGoal();
player2.addAssist();
player1.addGoal();
player2.addGoal();
player1.addAssist();

player1.getSummary();
player2.getSummary();