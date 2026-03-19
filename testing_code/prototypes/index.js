const animal = {
    speak() {
        console.log("Bark");
    }
};

const dog = Object.create(animal);

dog.speak();

function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function() {
	console.log("Hello " + this.name);
}

const p = new Person("Ethan");

p.sayHello();