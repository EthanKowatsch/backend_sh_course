import { generateAccountNumber, checkIfAccountExists } from "../utils/helper.js";
import { updateAccounts, updateTransactions } from "../utils/jsonHandler.js";
import { InvalidUserNameEntered, InvalidAccountTypeEntered, InvalidAmountEntered, InvalidAccountEntered, InvalidWithdrawalAmount } from "./errors.js";
import { Transaction } from "./Transaction.js";

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
    /**
     * Creates a new account instance.
     * 
     * @param {string} userName - Username associated with the account.
     * @param {string} accountType - The type of account (Investment, Banking, etc.).
     */
    constructor(userName, accountType) {
        this.accountNumber = generateAccountNumber();
        this.userName = userName;
        this.balance = 0;
        this.accountType = accountType;
    }

    set userName(userNameValue) {
        if(!userNameValue.trim() || !userNameValue) {
            throw new InvalidUserNameEntered();
        }

        this._userName = userNameValue;
    }

    set accountType(accountTypeValue) {
        if(!accountTypeValue.trim() || !accountTypeValue) {
            throw new InvalidAccountTypeEntered();
        }

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
        if(amount <= 0) {
            throw new InvalidAmountEntered();
        }

        // Make sure account number inputted exists
        const accountExists = checkIfAccountExists(accountNumberInput);

        if(!accountExists) {
            throw new InvalidAccountEntered();
        }

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberInput
        );

        // Update account balance        
        accountsArray[accountIndex].balance += amount;

        // Update account json
        updateAccounts();

        Transaction.createNewTransaction("Deposit", amount, accountNumberInput);

        // Update transaction json
        updateTransactions();
    }

    /**
     * Method to withdraw amount from an account
     * 
     * @param {number} accountNumberInput - Inputted account number to withdraw from.
     * @param {number} amount - Amount to be withdrawn.
     */
    withdraw(accountNumberInput, amount) {
        if(amount <= 0) {
            throw new InvalidAmountEntered();    
        }

        // Make sure account number inputted exists
        const accountExists = checkIfAccountExists(accountNumberInput);

        if(!accountExists) {
            throw new InvalidAccountEntered();
        }

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberInput
        );

        if((accountsArray[accountIndex].balance - amount) < 0) {
            throw new InvalidWithdrawalAmount();
        }

        // Update account balance        
        accountsArray[accountIndex].balance -= amount;

        // Update account json
        updateAccounts();

        Transaction.createNewTransaction("Withdrawal", amount, accountNumberInput);

        // Update transaction json
        updateTransactions();
    }

    /**
     * Method to transfer balances.
     * 
     * @param {number} accountNumberTransferOut - Account number transferring money out of.
     * @param {number} accountNumberTransferIn - Account number money being transferred into.
     * @param {number} amount - Amount being transferred between accounts.
     */
    transfer(accountNumberTransferOut, accountNumberTransferIn, amount) {
        if(amount <= 0) {
            throw new InvalidAmountEntered();    
        }

        // Make sure accounts inputted exist
        const accountTransferOutExists = checkIfAccountExists(accountNumberTransferOut);
        const accountTransferInExists = checkIfAccountExists(accountNumberTransferIn);

        if(!accountTransferOutExists) {
            throw new InvalidAccountEntered();
        }

        if(!accountTransferInExists) {
            throw new InvalidAccountEntered();
        }

        Account.withdraw(accountNumberTransferOut, amount);
        Account.deposit(accountNumberTransferIn, amount);

        // Update accounts json
        updateAccounts();

        Transaction.createNewTransaction("Transfer Out", amount, accountNumberTransferOut);
        Transaction.createNewTransaction("Transfer In", amount, accountNumberTransferIn);

        // Update transaction json
        updateTransactions();
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

        console.log(`Account #${newAccount.accountNumber} was created successfully.`);

        // Update account json
        updateAccounts();
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

        if(!accountExists) {
            throw new InvalidAccountEntered();
        }

        const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberToPrint
        );

        console.log(`Account: #${accountsArray[accountIndex].accountNumber} | Account name: ${accountsArray[accountIndex].userName} | Account Type: ${accountsArray[accountIndex].accountType} | Balance: ${accountsArray[accountIndex].balance.toFixed(2)}`);
    }
}