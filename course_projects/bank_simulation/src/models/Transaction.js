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
    constructor(transactionType, transactionAmount, accountNumberAffected, timeStamp = getCurrentDateAndTime()) {
        this.transactionType = transactionType;
        this.transactionAmount = transactionAmount;
        this.accountNumberAffected = accountNumberAffected;
        this.timeStamp = timeStamp;
    }

    set transactionType(value) {
        if (!value?.trim()) throw new InvalidTransactionType();
        this._transactionType = value;
    }

    set transactionAmount(value) {
        if (value <= 0) throw new InvalidTransactionAmount();
        this._transactionAmount = value;
    }

    set accountNumberAffected(value) {
        if (!checkIfAccountExists(value)) throw new InvalidAccountEntered();
        this._accountNumberAffected = value;
    }

    get transactionType() { return this._transactionType; }
    get transactionAmount() { return this._transactionAmount; }
    get accountNumberAffected() { return this._accountNumberAffected; }

    toJSON() {
        return {
            transactionType: this.transactionType,
            transactionAmount: this.transactionAmount,
            accountNumberAffected: this.accountNumberAffected,
            timeStamp: this.timeStamp
        };
    }

    /**
     * Static method to create a new Transaction class.
     * 
     * @param {string} transactionType 
     * @param {number} transactionAmount 
     * @param {number} accountNumberAffected 
     */
    static createNewTransaction(transactionType, transactionAmount, accountNumberAffected) {
        const newTransaction = new Transaction(transactionType, transactionAmount.toFixed(2), accountNumberAffected);

        transactionArray.push(newTransaction);
    }
}