import { getCurrentDateAndTime, checkIfAccountExists } from "../utils/helper.js";
import { InvalidTransactionAmount, InvalidTransactionType, InvalidAccountEntered } from "./errors.js";

export let transactionArray = [];

/**
 * Transaction Model
 * 
 * Handles:
 * - Transaction creation
 * - Logging transactions to JSON
 */
export class Transaction {
    /**
     * Creates a new Transaction instance.
     * 
     * @param {string} transactionType - Type of transaction (deposit, withdrawal, transfer).
     * @param {number} transactionAmount - Amount involved in transaction.
     * @param {number} accountNumberAffected - Account linked to transaction.
     */
    constructor(transactionType, transactionAmount, accountNumberAffected) {
        this.transactionType = transactionType;
        this.transactionAmount = transactionAmount;
        this.accountNumberAffected = accountNumberAffected;
        this.timeStamp = getCurrentDateAndTime();
    }

    set transactionType(transactionTypeValue) {
        if(!transactionTypeValue || !transactionTypeValue.trim()) {
            throw new InvalidTransactionType(); 
        }

        this._transactionType = transactionTypeValue;
    }

    set transactionAmount(transactionAmountValue) {
        if(transactionAmountValue <= 0) {
            throw new InvalidTransactionAmount();
        }

        this._transactionAmount = transactionAmountValue;
    }

    set accountNumberAffected(accountNumberAffectedValue) {
        const accountExists = checkIfAccountExists(accountNumberAffectedValue);

        if(!accountExists) {
            throw new InvalidAccountEntered();
        }

        this._accountNumberAffected = accountNumberAffectedValue;
    }

    get transactionType() { return this._transactionType };
    get transactionAmount() { return this._transactionAmount };
    get accountNumberAffected() { return this._accountNumberAffected };

    /**
     * Static method to create a new Transaction class.
     * 
     * @param {string} transactionType 
     * @param {number} transactionAmount 
     * @param {number} accountNumberAffected 
     */
    static createNewTransaction(transactionType, transactionAmount, accountNumberAffected) {
        const newTransaction = new Transaction(transactionType, transactionAmount, accountNumberAffected);

        transactionArray.push(newTransaction);
    }
}