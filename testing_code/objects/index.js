// Setting up an object
let user = {
	name: "Ethan",
	email: "ethan.k@gmail.com",
	isAdmin: false,
	age: 20
};

console.log(`NORMAL OUTPUT: Hello ${user.name}, you're ${user.age}`);

// Using brackets to find a key value
const key = "name";

console.log(user[key]);

// Deleting a user's age in an object
delete user.age;

console.log(`DELETE AGE: Hello ${user.name}, you're ${user.age}`);