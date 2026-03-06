// Given JSON
const userJSON = '{"name":"Ethan","email":"ethan@email.com","role":"admin"}';

// Convert JSON to JS object
const userObj = JSON.parse(userJSON);

// Destructure name and email from the JSON
const { name: userName, email: userEmail } = userObj;

// Print out a formatted output
console.log(`User: ${userName} - Email: ${userEmail}`);