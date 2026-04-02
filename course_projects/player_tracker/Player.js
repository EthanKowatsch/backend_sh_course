export class Player {
    constructor(playerName, playerGoals = 0, playerAssists = 0) {
        this.playerName = playerName;
        this._playerGoals = playerGoals;
        this._playerAssists = playerAssists;
    }

    set playerName(playerNameValue) {
        if(!playerNameValue?.trim()) throw new Error;
        
        this._playerName = playerNameValue;
    }

    get playerName() { return this._playerName };

    addGoal() {
        this._playerGoals += 1;
    }

    addAssist() {
        this._playerAssists += 1;
    }

    showSummary() {
        console.log(`${this.playerName} - Goals: ${this._playerGoals} | Assists: ${this._playerAssists}`);
    }

    static fromJSON(obj) {
        const name = obj._playerName || "Unknown Player";
        const goals = obj._playerGoals ?? 0;
        const assists = obj._playerAssists ?? 0;
        return new Player(name, goals, assists);
    }
}