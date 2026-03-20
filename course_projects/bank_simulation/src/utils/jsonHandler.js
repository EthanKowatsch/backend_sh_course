import fs from "fs";
import { accountsArray } from "../models/Account.js";
import { transactionArray } from "../models/Transaction.js";

/**
 * Function to load the accountsArray with the different accounts
 */
export function loadAccounts() {
    try {
        const jsonAccounts = fs.readFileSync("data/accounts.json", "utf8");

        if (!jsonAccounts.trim()) return // TODO: Add custom error if now accounts exist;

        const tempAccountsObj = JSON.parse(jsonAccounts);

        accountsArray.length = 0;
        accountsArray.push(...tempAccountsObj);
    }
    catch(err) {
        // TODO: Custom error when the json doesn't work
    }
}

/**
 * Function to update the accounts JSON when a new account is created
 */
export function updateAccounts() {
    try {
        fs.writeFileSync("data/accounts.json", JSON.stringify(accountsArray, null, 2), "utf8");
    }
    catch(err) {
        // TODO: Custom error when the json doesn't work
    }
}

/**
 * Function to load the transactions
 */
export function loadTransactions() {
    try {
        const jsonTransactions = fs.readFileSync("data/transactions.json", "utf8");

        const tempTransactionObj = JSON.parse(jsonTransactions);

        transactionArray.length = 0;
        transactionArray.push(...tempTransactionObj);
    }
    catch(err) {
        // TODO: Custom error when the json doesn't work
    }
}

/**
 * Function to update the transactions JSON
 */
export function updateTransactions() {
    try {
        fs.writeFileSync("data/transactions.json", JSON.stringify(transactionArray, null, 2), "utf8");
    }
    catch(err) {
        // TODO: Custom error when the json doesn't work
    }
}