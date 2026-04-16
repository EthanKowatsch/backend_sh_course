function addTwoNum(n1, n2) {
    return n1 + n2;
}

function largestNum(n1, n2) {
    return n1 > n2? n1 : n2;
}

function isEven(num) {
    return num % 2 == 0;
}

let number1 = 10;
let number2 = 15;

console.log(`Add Two Numbers: ${number1} + ${number2} = ${addTwoNum(number1, number2)}`);
console.log(`Largest number between ${number1} and ${number2} is ${largestNum(number1, number2)}`);
console.log(`Is ${number1} even? ${isEven(number1)}`);
console.log(`Is ${number2} even? ${isEven(number2)}`);