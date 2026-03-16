/* --- Counter Example --- */
function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/* --- Custom Error Example --- */
function createLogger(prefix) {
    return function(message) {
        console.log(`${prefix}: ${message}`);
    };
}

const errorLogger = createLogger("ERROR");

errorLogger("File could not be found");