import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printMenu() {
    console.log("\n--- Task Tracking Tool ---");
    console.log("1 - Add task");
    console.log("2 - Update task");
    console.log("3 - Delete task");
    console.log("4 - List tasks");
    console.log("5 - Mark task in-progress");
    console.log("6 - Mark task done");
    console.log("7 - List tasks by status");
    console.log("8 - Exit");
}

export function mainMenu() {
    printMenu();
    rl.question("Enter choice: ", (userChoice) => {
        switch(userChoice) {
            case "1":
                mainMenu();
                break;
            case "2":
                mainMenu();
                break;
            case "3":
                mainMenu();
                break;
            case "4":
                mainMenu();
                break;
            case "5":
                mainMenu();
                break;
            case "6":
                mainMenu();
                break;
            case "7":
                mainMenu();
                break;
            case "8":
                console.log("Thank you for using the task tracker!");
                rl.close();
                break;
            default:
                console.log("Invalid choice");
                mainMenu();
                break;
        }
    });
}