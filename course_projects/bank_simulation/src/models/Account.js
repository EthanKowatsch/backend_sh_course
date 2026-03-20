import { generateAccountNumber, checkIfAccountExists } from "../utils/helper.js";

export let accountsArray = [];

/**
 * Account Model
 * 
 * Handles:
 * - Account creation
 * - Balance updates
 * - Transfers between accounts
 * - Viewing accounts
 */
export class Account {
    constructor(userName, accountType) {
        this.accountNumber = generateAccountNumber();
        this.userName = userName;
        this.balance = 0;
        this.accountType = accountType;
    }

    set userName(userNameValue) {
        if(!userNameValue) return // TODO: Create custom error

        this._userName = userNameValue;
    }

    set accountType(accountTypeValue) {
        if(!accountTypeValue) return // TODO: Create custom error

        this._accountType = accountTypeValue;
    }

    get userName() { return accountTypeValue };
    get accountType() { return accountsType };

    /**
     * Method to deposit amount to an account
     * 
     * @param {number} accountNumberInput - Inputted account number to deposit to.
     * @param {number} amount - Amount to be deposited.
     */
    deposit(accountNumberInput, amount) {
        if(amount <= 0) return //TODO: Add custom error;

        // Make sure account number inputted exists
        const accountExists = checkIfAccountExists(accountNumberInput);

        if(!accountExists) return //TODO: Add custom error;

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberInput
        );

        // Update account balance        
        accountsArray[accountIndex].balance += amount;

        // TODO: Log transaction to JSON
    }

    /**
     * Method to withdraw amount from an account
     * 
     * @param {number} accountNumberInput - Inputted account number to withdraw from.
     * @param {number} amount - Amount to be withdrawn.
     */
    withdraw(accountNumberInput, amount) {
        if(amount <= 0) return //TODO: Add custom error;

        // Make sure account number inputted exists
        const accountExists = checkIfAccountExists(accountNumberInput);

        if(!accountExists) return //TODO: Add custom error;

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberInput
        );

        if((accountsArray[accountIndex].balance - amount) < 0) return //TODO: Add custom error;

        // Update account balance        
        accountsArray[accountIndex].balance -= amount;

        // TODO: Log transaction to JSON
    }

    /**
     * Method to transfer balances.
     * 
     * @param {number} accountNumberTransferOut - Account number transferring money out of.
     * @param {number} accountNumberTransferIn - Account number money being transferred into.
     * @param {number} amount - Amount being transferred between accounts.
     */
    transfer(accountNumberTransferOut, accountNumberTransferIn, amount) {
        if(amount <= 0) return //TODO: Add custom error;

        // Make sure accounts inputted exist
        const accountTransferOutExists = checkIfAccountExists(accountNumberTransferOut);
        const accountTransferInExists = checkIfAccountExists(accountNumberTransferIn);

        if(!accountTransferOutExists) return //TODO: Add custom error;
        if(!accountTransferInExists) return //TODO: Add custom error;

        Account.withdraw(accountNumberTransferOut, amount);
        Account.deposit(accountNumberTransferIn, amount);

        // TODO: Post both outgoing and inbound transactions
    }

    /**
     * Static method to create a new user's account
     * 
     * @param {string} userName - The name the user wants associated with the account.
     * @param {string} accountType - The account type (ie. savings, investment, etc.).
     */
    static createAccount(userName, accountType) {
        const newAccount = new Account(userName, accountType);

        accountsArray.push(newAccount);

        // TODO: Update JSON account file
    }

    /**
     * Static method to print all accounts
     */
    static printAccounts() {
        accountsArray.forEach(account => {
            console.log(`Account: #${account.accountNumber} | Account name: ${account.userName} | Account Type: ${account.accountType} | Balance: ${account.balance.toFixed(2)}`);
        });
    }

    /**
     * Method to print a specific account to the CLI.
     * 
     * @param {number} accountNumberToPrint - Inputted account number that is to be printed.
     */
    static printSpecificAccount(accountNumberToPrint) {
        // Make sure account number inputted exists
        const accountExists = checkIfAccountExists(accountNumberToPrint);

        if(!accountExists) return //TODO: Add custom error;

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberToPrint
        );

        console.log(`Account: #${accountsArray[accountIndex].accountNumber} | Account name: ${accountsArray[accountIndex].userName} | Account Type: ${accountsArray[accountIndex].accountType} | Balance: ${accountsArray[accountIndex].balance.toFixed(2)}`);
    }
}