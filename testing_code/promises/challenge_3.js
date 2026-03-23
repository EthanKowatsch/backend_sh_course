/* Chain two .then() calls: first multiplies a number by 2, then adds 5. Handle errors with .catch() */
function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function multiplyByTwo(num) {
    return new Promise((resolve, reject) => {
        if(typeof num === "number" && !isNaN(num)) {
            resolve(num * 2);
        }
        else {
            reject(`Error: ${num} is not a number`);
        }
    });
}

function addFive(num) {
    return new Promise((resolve, reject) => {
        if(typeof num === "number" && !isNaN(num)) {
            resolve(num + 5);
        }
        else {
            reject(`Error Occurred`);
        }
    });
}

const randomNum = getRandomNum();

multiplyByTwo(randomNum)
    .then(value => {
        console.log(`Initial value: ${value / 2} * 2 = ${value}`);
        return addFive(value);
    })
    .then(finalValue => {
        console.log(`${finalValue - 5} + 5 = ${finalValue}`);
    })
    .catch(error => {
        console.log(error);
    });