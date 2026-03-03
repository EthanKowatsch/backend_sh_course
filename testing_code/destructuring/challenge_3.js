// Given
const request= {
  body: {
    name: "Ethan",
    email: "ethan@email.com"
  }
};

// Destructure name and email directly in one line.
const { body: { name: userName, email: userEmail } } = request;

if (!userName) {
  throw new Error("Name is required");
}

if (!userEmail) {
  throw new Error("Email is required");
}

console.log(`User First Name: ${userName}, User Email: ${userEmail}`);