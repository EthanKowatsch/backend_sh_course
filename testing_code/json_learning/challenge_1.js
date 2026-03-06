// Given
const product = {
  name: "Laptop",
  price: 1200
};

// Turn the data into JSON, and then parse it back to an object
const productJSON = JSON.stringify(product);

console.log(productJSON);

const productParsed = JSON.parse(productJSON);

console.log(productParsed);