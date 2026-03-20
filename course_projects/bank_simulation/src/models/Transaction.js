import { getCurrentDateAndTime, checkIfAccountExists } from "../utils/helper.js";
import { accountsArray } from "./Account.js";

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
     * @param {string} transactionType - Type of transaction (deposit, withdrawal, transfer)
     * @param {number} transactionAmount - Amount involved in transaction
     * @param {number} accountNumberAffected - Account linked to transaction
     */
    constructor(transactionType, transactionAmount, accountNumberAffected) {
        this.transactionType = transactionType;
        this.transactionAmount = transactionAmount;
        this.accountNumberAffected = accountNumberAffected;
        this.timeStamp = getCurrentDateAndTime();
    }

    set transactionType(transactionTypeValue) {
        if(!transactionTypeValue) return //TODO: Add custom error;

        this._transactionType = transactionTypeValue;
    }

    /**
     * 
     */
    set transactionAmount(transactionAmountValue) {
        if(transactionAmountValue <= 0) return //TODO: Add custom error;

        this._transactionAmount = transactionAmountValue;
    }

    set accountNumberAffected(accountNumberAffectedValue) {
        const accountExists = checkIfAccountExists(accountNumberAffectedValue);

        if(!accountExists) return //TODO: Add custom error;

        this._accountNumberAffected = accountNumberAffectedValue;
    }

    get transactionType() { return this._transactionType };
    get transactionAmount() { return this._transactionAmount };
    get accountNumberAffected() { return this._accountNumberAffected };

    /**
     * Logs transaction to transactions.json
     */
    logTransaction() {

    }
}