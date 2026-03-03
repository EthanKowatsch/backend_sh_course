// Define the array of objects
const orders = [
  { id: 1, total: 50 },
  { id: 2, total: 75 },
  { id: 3, total: 100 }
];

// Print the order summary
console.log("--- Order Summary ---");

orders.forEach(order => {
    console.log(`Order ID: ${order.id}, Order Total: $${order.total}`);
});

// Get array of totals
console.log("\n--- Array of Totals ---");

const totals = orders.map(({ total }) => (total));

totals.forEach(total => {
    console.log(`$${total}`);
});

// Calculate total revenue
const startingAmount = 0;
const totalRevenue = orders.reduce((sumRevenue, order) => sumRevenue + order.total, startingAmount);

console.log(`\nTotal Order revenue: $${totalRevenue}`);