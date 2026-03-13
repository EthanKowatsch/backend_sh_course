import { addTask, deleteTask, updateTask, listTasks, listTasksTodo, listTasksInProgress, listTasksDone } from "./taskManager.js";
import { tasksArray, saveTasks } from "./storage.js";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questionLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printMenu() {
    console.log("\n--- Task Tracking Tool ---");
    console.log("1 - Add Task");
    console.log("2 - Update Task");
    console.log("3 - Delete Task");
    console.log("4 - List Tasks");
    console.log("5 - List Tasks In-Progress");
    console.log("6 - List Tasks Not Started");
    console.log("7 - List Tasks Done");
    console.log("8 - Exit");
}

export function mainMenu() {
    let newTaskName;
    let newTaskDescription;

    printMenu();

    rl.question("Enter choice: ", (userChoice) => {
        switch(userChoice) {
            case "1":

                // TODO: FIX THIS ISSUE
                questionLine.question("Enter Task Name:", (newTaskName) => {
                    if(newTaskName === "") {
                        console.log("Task name incorrect");
                        questionLine.close();
                    }

                    questionLine.close();
                });

                questionLine.question("Enter Task Description:", (newTaskDescription) => {
                    if(newTaskDescription === "") {
                        console.log("Need task description incorrect");
                        questionLine.close();
                    }
                });

                addTask();
                mainMenu();
                break;
            case "2":

                // TODO: Figure out this code
                if(currentTaskID == 0) {
                    console.log(`No tasks exist yet.`);
                }

                if(searchID > currentTaskID) {
                    console.log(`ID: #${searchID} does not exist.`);
                }

                if(searchID < 0) {
                    console.log(`ID: #${searchID} must be a positive number.`);
                }
            
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
                saveTasks();
                console.log("\nExited the task tracker.");
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                mainMenu();
                break;
        }
    });
}