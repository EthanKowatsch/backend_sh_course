// Given
const order = {
  id: 101,
  total: 250,
  status: "processing"
};

// Convert object to JSON
const orderJSON = JSON.stringify(order);

// Print the JSON string
console.log(`JSON String: ${orderJSON}`);

// Parse the JSON back to an object
const parsedJSONOrder = JSON.parse(orderJSON);

// Complete the order status
parsedJSONOrder.status = "Complete";

// Print the order status
console.log(`Order Status: ${parsedJSONOrder.status}`);