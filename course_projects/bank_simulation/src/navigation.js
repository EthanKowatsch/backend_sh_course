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
                    });
                });
                break;
            // Deposit amount
            case "2":
                break;
            // Withdraw amount
            case "3":
                break;
            // Transfer amount
            case "4":
                break;
            // Print all accounts and their details
            case "5":
                break;
            // Print specific account details
            case "6":

                break;
            // Exit application
            case "7":
                break;
            default:
                console.log("ERROR");
                break;
        }
    })
}