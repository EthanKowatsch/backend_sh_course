// Declaring a user array
const users = ["Ethan", "John", "Mark"];

/* Pushing new name value to the end of the array */
const newUserName = "Bill";

console.log("Pushing new item 'Bill' to the array.");

users.push(newUserName);

users.forEach(userName => {
    console.log(userName);
});

/* Popping newly added name off the end of the array */
console.log("\nPopping item last element off the array.");

users.pop();

users.forEach(userName => {
    console.log(userName);
});

/* Modifying the array with map */
const numbers = [1, 3, 5];

console.log("\n--Original Array--");

numbers.forEach(number => {
	console.log(number);
});

const doubled = numbers.map(n => n * 2);

console.log("\n--Doubled Array--");

doubled.forEach(number => {
	console.log(number);
});

/* Using filter */
const nums = [1, 2, 3, 4];

console.log("\n--Original Array--");

nums.forEach(number => {
	console.log(number);
});

console.log("\n--Filtered Array (Even numbers only)--")
const even = nums.filter(n => n % 2 === 0);

even.forEach(num => {
	console.log(num);
});