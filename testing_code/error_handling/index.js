// Custom error - validation error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

// Example function that can throw different errors
function processUserInput(username, dbConnected) {
    // Check username
    if (!username) {
        throw new ValidationError("Username cannot be empty.");
    }

    // Simulate a database issue
    if (!dbConnected) {
        throw new DatabaseError("Database connection failed.");
    }

    console.log(`User '${username}' processed successfully!`);
}

// Testing the function
try {
    processUserInput("", true); // Invalid username
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(`Validation Error caught: ${err.message}`);
    } else if (err instanceof DatabaseError) {
        console.log(`Database Error caught: ${err.message}`);
    } else {
        console.log(`Unknown error: ${err.message}`);
    }
}

try {
    processUserInput("Alice", false); // Database problem
} catch (err) {
    if (err instanceof ValidationError) {
        console.log(`Validation Error caught: ${err.message}`);
    } else if (err instanceof DatabaseError) {
        console.log(`Database Error caught: ${err.message}`);
    } else {
        console.log(`Unknown error: ${err.message}`);
    }
}

try {
    processUserInput("Bob", true); // Works fine
} catch (err) {
    console.log(`Error caught: ${err.message}`);
}