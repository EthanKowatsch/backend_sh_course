// Given
const firstName = "Ethan";
const email = "ethan@email.com";
const role = "admin";

// Create object using these values
const user = {
    name: firstName,
    email: email,
    role: role
};

// Convert to JSON
const userJSON = JSON.stringify(user);

// Print the JSON string
console.log(userJSON);