import { Account } from "./models/Account.js";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Function to print the menu for the CLI
 */
function printMenu() {
    console.log("\n--- Bank Simulation Software ---");
    console.log("1 - Create Account");
    console.log("2 - Deposit");
    console.log("3 - Withdraw");
    console.log("4 - Transfer");
    console.log("5 - Print All Accounts");
    console.log("6 - Print Specific Account");
    console.log("7 - Exit");
}

export function mainMenu() {
    printMenu();

    rl.question("Enter Choice: ", (userChoice) => {
        switch(userChoice){
            // Create a new account
            case "1":
                rl.question("Enter Account Name: ", (accountName) => {
                    rl.question("Enter Account Type: ", (accountType) => {
                        Account.createAccount(accountName, accountType);
                        mainMenu();
                    });
                });
                break;
            // Deposit amount
            case "2":
                rl.question("Deposit - Enter Account Number: ", (accountNumber) => {
                    rl.question("Enter Deposit Amount: ", (amount) => {
                        Account.deposit(accountNumber, amount);
                        mainMenu();
                    });
                });
                break;
            // Withdraw amount
            case "3":
                rl.question("Withdraw - Enter Account Number: ", (accountNumber) => {
                    rl.question("Enter Withdraw Amount: ", (amount) => {
                        Account.withdraw(accountNumber, amount);
                        mainMenu();
                    });
                });
                break;
            // Transfer amount
            case "4":
                rl.question("Enter Account Transferring Out: ", (accountNumberOut) => {
                    rl.question("Enter Account Transferring In: ", (accountNumberIn) => {
                        rl.question("Enter Transfer Amount: ", (amount) => {
                            Account.transfer(accountNumberOut, accountNumberIn, amount);
                            mainMenu();
                        });
                    });
                });
                break;
            // Print all accounts and their details
            case "5":
                Account.printAccounts();

                mainMenu();
                break;
            // Print specific account details
            case "6":
                rl.question("Print Account - Enter Account Number: ", (accountNumberToPrint) => {
                    Account.printSpecificAccount(accountNumberToPrint);
                    mainMenu();
                });
                break;
            // Exit application
            case "7":
                console.log("Exiting Bank Software...");
                rl.close();
                break;
            default:
                console.log("ERROR");
                mainMenu();
                break;
        }
    })
}