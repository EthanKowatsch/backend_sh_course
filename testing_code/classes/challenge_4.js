class User {
    static userArray = [];

    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    set id(idValue) {
        if(idValue < 0) throw new Error("Error: ID must be a positive number.");

        this._id = idValue;
    }

    set username(usernameValue) {
        if(!usernameValue) throw new Error("Error: Username must have a value.");

        this._username = usernameValue;
    }

    set email(emailValue) {
        if(!emailValue) throw new Error("Error: Email must have a value.");

        this._email = emailValue;
    }

    get id() { return this._id };
    get username() { return this._username };
    get email() { return this._email };

    static createUser(id, username, email) {
        const user = new User(id, username, email);

        User.userArray.push(user);
    }

    getAllUserInfo() {
        for(let i = 0; i < User.userArray.length; i++) {
            console.log(`\n-------------\nUser ${i + 1} Information\nID: ${User.userArray[i].id}\nUsername: ${User.userArray[i].username}\nEmail: ${User.userArray[i].email}\n-------------`);
        }
    }

    findUser(searchId) {
        for(let i = 0; i < User.userArray.length; i++) {
            if(User.userArray[i].id === searchId) {
                console.log(`\n-------------\nUser ${i + 1} Information\nID: ${User.userArray[i].id}\nUsername: ${User.userArray[i].username}\nEmail: ${User.userArray[i].email}\n-------------`);
                return;
            }
        }

        console.log(`User ID: ${searchId} not found.`);
    }
}

/* ====== Tests created by ChatGPT ====== */

// Create some users
User.createUser(1, "Ethan", "ethan@example.com");
User.createUser(2, "Alice", "alice@example.com");
User.createUser(3, "Bob", "bob@example.com");

// Test getting all users
const testUserInstance = new User(0, "test", "test@test.com"); // just to call instance methods
console.log("All users:");
testUserInstance.getAllUserInfo();

// Test finding a user by ID
console.log("\nFind User with ID 2:");
testUserInstance.findUser(2);

console.log("\nFind User with ID 10 (nonexistent):");
testUserInstance.findUser(10);

// Test validation (should throw errors)
try {
    User.createUser(-1, "InvalidID", "fail@example.com");
} catch (e) {
    console.log("\nError caught:", e.message);
}

try {
    User.createUser(4, "", "noUsername@example.com");
} catch (e) {
    console.log("Error caught:", e.message);
}

try {
    User.createUser(5, "NoEmail", "");
} catch (e) {
    console.log("Error caught:", e.message);
}