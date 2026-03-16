function createLimitedUseFunction(fn, limit) {
    let counterToLimit = 0;

    return function(...args) {
        counterToLimit++;

        if(counterToLimit <= limit) {
            return fn(...args);
        }

        console.log(`Reached limit on function use. Limit is ${limit}`);
    }
}

function greet(userName) {
    return console.log(`Hello ${userName}`);
}

const limitedGreet = createLimitedUseFunction(greet, 3);

limitedGreet("Ethan"); // Hello Ethan
limitedGreet("Alex"); // Hello Alex
limitedGreet("Bob"); // Hello Bob
limitedGreet("John"); // Reached limit on function use. Limit is 3