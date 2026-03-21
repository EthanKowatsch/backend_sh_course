import { mainMenu } from "../navigation.js";

// TODO: Document code
export class InvalidUserNameEntered extends Error {
    constructor(message = "Username cannot be empty.") {
        super(message);
        this.name = "InvalidUserNameEntered";
    }
}

export class InvalidAccountTypeEntered extends Error {
    constructor(message = "Account type cannot be empty.") {
        super(message);
        this.name = "InvalidAccountTypeEntered";
    }
}

export class InvalidAmountEntered extends Error {
    constructor(message = "Amount entered must be greater than $0.") {
        super(message);
        this.name = "InvalidAmountEntered";
    }
}

export class InvalidAccountEntered extends Error {
    constructor(message = "Account number does not exist.") {
        super(message);
        this.name = "InvalidAccountEntered";
    }
}

export class InvalidWithdrawalAmount extends Error {
    constructor(message = "Insufficient funds - cannot withdraw.") {
        super(message);
        this.name = "InvalidWithdrawalAmount";
    }
}