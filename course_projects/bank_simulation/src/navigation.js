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
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            default:
                console.log("ERROR");
                break;
        }
    })
}