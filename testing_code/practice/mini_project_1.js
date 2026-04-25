let score = 0;

function addPoints(amount) {
    return score += amount;
}

function removePoints(amount) {
    return score -= amount;
}

function printScore() {
    console.log(`Current Score: ${score}`);
}

printScore();
addPoints(3);
printScore();
removePoints(1);
printScore();