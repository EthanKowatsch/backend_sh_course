let players = ["Ethan", "Liam", "Noah"];

function printArray() {
    let playerCount = 0;
    
    players.forEach(player => {
        playerCount += 1;

        console.log(`${playerCount}. ${player}`);
    });
}

function getPlayerIndex(playerName) {
    return players.indexOf(playerName);
}

function addNewPlayer(playerName) {
    if(getPlayerIndex(playerName) !== -1) {
        console.log("Player already exists.");
        return;
    }

    players.push(playerName);
}

function removePlayer(playerName) {
    let index = getPlayerIndex(playerName)
    
    if(index === -1) {
        console.log("No players found to remove.");
        return;
    }

    players.splice(index, 1);
}

// Print initial array
console.log("\n--- Print Initial Array ---");
printArray();

// Add new player
console.log("\n--- Add New Player ---");
addNewPlayer("Bob");
printArray();

// Should remove player
console.log("\n--- Remove Player ---");
removePlayer("Ethan");
printArray();

// No player exists
console.log("\n--- Try Removing Player ---");
removePlayer("John");