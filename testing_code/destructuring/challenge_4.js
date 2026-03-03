// Given
const users= [
  { 
    id: 1, 
    name: "Ethan" 
},
  { 
    id: 2, 
    name: "Sarah"
}
];

// Destructure the first user's name, and the second user's id without indexing twice
const [ { id: id1, name: name1 }, { id: id2, name: name2 } ] = users;

console.log(`User 1's Name: ${name1}, User 2's ID: ${id2}`);