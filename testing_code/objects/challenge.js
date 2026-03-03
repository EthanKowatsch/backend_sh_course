let product = {
    id: 1,
    name: "Computer",
    price: 100,
    inStock: true,
    decreasePrice(amount) {
        if(amount <= 0) {
            throw new Error("Amount cannot be negative");
        }

        if(this.price - amount < 0) {
            throw new Error("Price cannot be negative");
        }

        return this.price -= amount;
    },
    increasePrice(amount) {
        if(amount <= 0) {
            throw new Error("Amount cannot be negative");
        }

        return this.price += amount;
    }
}

// Initial product print
console.log(`---Product Information---\nName: ${product.name}\nPrice: $${product.price}\nIn stock? ${product.inStock}\n`);

// Add to price
console.log(`Price Modifier 1 - Initial: $${product.price}, Modified (Add $10) $${product.increasePrice(10)}`);

// Subtract from price
console.log(`Price Modifier 2 - Initial: $${product.price}, Modified (Subtract $20) $${product.decreasePrice(20)}\n`);

// Final product print
product.inStock = false;
console.log(`---Product Information---\nName: ${product.name}\nPrice: $${product.price}\nIn stock? ${product.inStock}\n`);