class InvalidAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAmountError"
    }
}

class InvalidBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidBalanceError"
    }
}

let account1 = 100;

function withdraw(account, amount) {
    if(amount <= 0) throw new InvalidAmountError("Amount must be positive.");

    if(account <= 0 || ((account - amount) < 0)) throw new InvalidBalanceError("Account will be negative.");

    return account -= amount;
}

try {
    console.log(`Balance Updated: $${withdraw(account1, 20)}`);
    console.log(`Balance Updated: $${withdraw(account1, -5)}`);
} catch (err) {
    if (err instanceof InvalidAmountError) {
        console.log(`Invalid amount: ${err.message}`);
    } else if (err instanceof InvalidBalanceError) {
        console.log(`Balance error: ${err.message}`);
    } else {
        console.log(`Unexpected error: ${err.message}`);
    }
}