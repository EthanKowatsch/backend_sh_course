import { accountsArray } from "../models/Account.js";

/**
 * Helper function to check the validity of an account number
 * 
 * @param {number} accountNumberInputted 
 * @returns True if the account exists, false if the account does not exist
 */
export function checkIfAccountExists(accountNumberInputted) {
    // Return if the account exists
    return accountsArray.some(
        account => account.accountNumber === accountNumberInputted
    );
}

/**
 * Helper function to generate the current date and time
 *  
 * @returns Formatted date and time as a string.
 */
export function getCurrentDateAndTime() {
    const currentDate = new Date();

    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const formattedCurrentDateAndTime = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}-${year} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return formattedCurrentDateAndTime;
}

/**
 * Function to randomly generate an account number
 * 
 * @returns Unique randomly generated account number
 */
export function generateAccountNumber() {
    const generatedAccountNumber = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;

    // Check if account exists
    const isDuplicate = checkIfAccountExists(generatedAccountNumber);

    // If account number already exists, we can recursively call the function again
    if(isDuplicate) return generateAccountNumber();

    return generatedAccountNumber;
}

/**
 * Helper function to find the account number index in the accounts array.
 * 
 * @param {number} accountNumberInputted 
 * @returns the index of the specific account number in the accounts array.
 */
export function findAccountIndex(accountNumberInputted) {
    const accountIndex = accountsArray.findIndex(
            account => account.accountNumber === accountNumberInputted
    );

    return accountIndex;
}