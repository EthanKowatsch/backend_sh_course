class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set name(nameValue) {
        if(nameValue === "") throw new Error("Error: Name must have value.");

        this._name = nameValue;
    }

    set age(ageValue) {
        if(ageValue <= 0) throw new Error("Error: Age must be greater than 0");

        this._age = ageValue;
    }

    get name() { return this._name; }
    get age() { return this._age; }

    introduce() {
        console.log(`Hi my name is ${this.name}. I am ${this.age} years old`);
    }
}

const newP = new Person("Ethan", 20);

newP.introduce();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    set grade(gradeValue) {
        if(gradeValue < 0) throw new Error("Error: Grade must be 0 or greater.");

        this._grade = gradeValue;
    }

    get grade() { return this._grade; }

    introduce() {
        console.log(`Hi my name is ${this.name}. I am ${this.age} years old and a student. My grade is ${this.grade}`);
    }
}

const newS = new Student("Ethan", 20, 97);

newS.introduce();