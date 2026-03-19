class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    correctDimensions() {
        return this.width > 0 && this.height > 0;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

const newRec = new Rectangle(5, 10);

if(newRec.correctDimensions()) {
    console.log(`Rectangle Size - Width: ${newRec.width}, Height ${newRec.height} | Area: ${newRec.area}, Perimeter: ${newRec.perimeter}`);
}
else {
    console.log("Error: Width and height must both be numbers greater than 0.");
}