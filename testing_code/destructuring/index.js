/* Object Destructuring */
let user = {
    id: 1,
    name: "Ethan"
};

const { id: userID, name: userName } = user;

console.log(`User ID: ${userID}, User Name: ${userName}`);

/* Array Destructuring */
let array = [1, 3, 5];

const [v1, v2] = array;

console.log(`Value 1: ${v1}, Value 2: ${v2}`);