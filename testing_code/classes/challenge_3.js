class Vehicle {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    set brand(brandValue) {
        if(brandValue === "") throw new Error("Error: Brand input must have value.");

        this._brand = brandValue
    }

    set speed(speedValue) {
        if(speedValue < 0) throw new Error("Error: Speed must be greater than 0.");

        this._speed = speedValue;
    }
    
    get brand() { return this._brand };
    get speed() { return this._speed };

    accelerate(amount) {
        this.speed += amount;
    }

    brake(amount) {
        this.speed -= amount;
    }
}

class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }

    set fuelType(fuelTypeValue) {
        if(fuelTypeValue === "") throw new Error("Error: Fuel type input must have value.");

        this._fuelType = fuelTypeValue;
    }

    get fuelType() { return this._fuelType };

    describe() {
        console.log(`Car Vehicle Type - Brand: ${this.brand}, Current Speed: ${(this.speed === 0) ? "Stopped at" : "Moving at"} ${this.speed}km/h | Fuel Type: ${this.fuelType}`);
    }
}

class Bike extends Vehicle {
    constructor(brand, speed, type) {
        super(brand, speed);
        this.type = type;
    }

    set type(typeValue) {
        if(typeValue === "") throw new Error("Error: Fuel type input must have value.");

        this._type = typeValue;
    }

    get type() { return this._type };

    describe() {
        console.log(`Bike Vehicle Type - Brand: ${this.brand}, Current Speed: ${(this.speed === 0) ? "Stopped at" : "Moving at"} ${this.speed}km/h | Road Type: ${this.type}`);
    }
}

// Create new car class
const newCar = new Car("Ford", 120, "Gas");
newCar.describe();

// Create new bike class
const newBike = new Bike("CCM", 0, "Mountain");
newBike.describe();