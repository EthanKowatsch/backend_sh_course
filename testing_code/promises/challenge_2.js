/* Create a promise that rejects with "Error occurred" if a randomly generated number is < 50, otherwise resolves with "All good". */
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function greaterThanFifty() {
    return new Promise((resolve, reject) => {
        const randomNum = getRandomNum();
        
        if(randomNum >= 50) {
            resolve(`All good, number was : ${randomNum}`);
        }
        else {
            reject(`Error occurred, number was : ${randomNum}`);
        }
    });
}

greaterThanFifty()
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });