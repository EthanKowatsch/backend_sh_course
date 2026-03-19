class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const newUser = new User("Ethan");

newUser.greet();