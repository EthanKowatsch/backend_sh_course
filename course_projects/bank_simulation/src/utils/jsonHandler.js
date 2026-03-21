import fs from "fs";
import { accountsArray } from "../models/Account.js";
import { transactionArray } from "../models/Transaction.js";
import { JSONLoadingError, JSONUpdatingError } from "../models/errors.js";

/**
 * Function to load the accountsArray with the different accounts
 */
export function loadAccounts() {
    try {
        if (!fs.existsSync("data/accounts.json")) {
            accountsArray.length = 0;
            return;
        }

        const jsonAccounts = fs.readFileSync("data/accounts.json", "utf8");

        if (!jsonAccounts || !jsonAccounts.trim()) {
            accountsArray.length = 0;
            return;
        }

        const tempAccountsObj = JSON.parse(jsonAccounts);

        accountsArray.length = 0;
        accountsArray.push(...tempAccountsObj.map(a => new Account(a.userName, a.accountType, a.balance, a.accountNumber)));
    }
    catch(err) {
        throw new JSONLoadingError("Failed to load accounts JSON.", err);
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
        throw new JSONUpdatingError("Accounts JSON failed to update.", err);
    }
}

/**
 * Function to load the transactions
 */
export function loadTransactions() {
    try {
        if (!fs.existsSync("data/transactions.json")) {
            transactionArray.length = 0;
            return;
        }

        const jsonTransactions = fs.readFileSync("data/transactions.json", "utf8");

        if (!jsonTransactions || !jsonTransactions.trim()) {
            transactionArray.length = 0;
            return;
        }

        const tempTransactionObj = JSON.parse(jsonTransactions);

        transactionArray.length = 0;
        transactionArray.push(...tempTransactionObj);
    }
    catch(err) {
        throw new JSONLoadingError("Failed to load transactions JSON.", err);
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
        throw new JSONUpdatingError("Transactions JSON failed to update.", err);
    }
}