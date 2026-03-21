import { mainMenu } from "../navigation.js";

/**
 * Error class to handle invalid username value entered
 */
export class InvalidUserNameEntered extends Error {
    /**
     * Creates a new InvalidUserNameEntered instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Username cannot be empty.") {
        super(message);
        this.name = "InvalidUserNameEntered";
    }
}

/**
 * Error class to handle invalid account type entered
 */
export class InvalidAccountTypeEntered extends Error {
    /**
     * Creates a new InvalidAccountTypeEntered instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Account type cannot be empty.") {
        super(message);
        this.name = "InvalidAccountTypeEntered";
    }
}

/**
 * Error class to handle invalid amount entered
 */
export class InvalidAmountEntered extends Error {
    /**
     * Creates a new InvalidAmountEntered instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Amount entered must be greater than $0.") {
        super(message);
        this.name = "InvalidAmountEntered";
    }
}

/**
 * Error class to handle invalid account number entered
 */
export class InvalidAccountEntered extends Error {
    /**
     * Creates a new InvalidAccountEntered instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Account number does not exist.") {
        super(message);
        this.name = "InvalidAccountEntered";
    }
}

/**
 * Error class to handle invalid withdrawal amounts entered
 */
export class InvalidWithdrawalAmount extends Error {
    /**
     * Creates a new InvalidWithdrawalAmount instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Insufficient funds - cannot withdraw.") {
        super(message);
        this.name = "InvalidWithdrawalAmount";
    }
}

/**
 * Error class to handle invalid transaction type entered
 */
export class InvalidTransactionType extends Error {
    /**
     * Creates a new InvalidTransactionType instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Transaction type must have a value.") {
        super(message);
        this.name = "InvalidTransactionType";
    }
}

/**
 * Error class to handle invalid transaction type entered
 */
export class InvalidTransactionAmount extends Error {
    /**
     * Creates a new InvalidTransactionAmount instance
     * 
     * @param {string} message - Value to hold the error message.
     */
    constructor(message = "Transaction amount must be greater than $0.") {
        super(message);
        this.name = "InvalidTransactionAmount";
    }
}