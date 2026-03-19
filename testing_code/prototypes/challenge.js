function Car(brand) {
    this.brand = brand;
}

Car.prototype.drive = function() {
    console.log(`Driving ${this.brand}`);
}

const d = new Car("Ford");

d.drive();