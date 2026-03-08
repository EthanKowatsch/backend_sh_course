import users from "./challenge_4.json" with { type: "json" };

users.forEach(usersObj => {
    // Destructure the user object
    const {id: currID, name: currName } = usersObj;

    // Print the output of the user id and name at a specific search index
    if(currID === 2) {
        console.log(`Found ID ${currID}, Name: ${currName}`);
    }
});