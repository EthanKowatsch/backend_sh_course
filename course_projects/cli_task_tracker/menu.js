import { addTask, deleteTask, updateTask, listTasks, listTasksTodo, listTasksInProgress, listTasksDone } from "./taskManager.js";
import { tasksArray, saveTasks, currentTaskID } from "./storage.js";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printMenu() {
    console.log("\n--- Task Tracking Tool ---");
    console.log("1 - Add Task");
    console.log("2 - Update Task");
    console.log("3 - Delete Task");
    console.log("4 - List Tasks");
    console.log("5 - List Tasks Todo");
    console.log("6 - List Tasks In Progress");
    console.log("7 - List Tasks Done");
    console.log("8 - Exit");
}

export function mainMenu() {
    printMenu();

    rl.question("Enter choice: ", (userChoice) => {
        switch(userChoice) {
            // Add Task
            case "1":
                rl.question("Enter task name: ", (taskName) => {
                    if (!taskName) {
                        console.log("Task name must not be empty.");
                        mainMenu();
                        return;
                    }

                    rl.question("Enter task description: ", (taskDescription) => {
                        if(!taskDescription) {
                            console.log("Task description must not be empty.");
                            mainMenu();
                            return;
                        }
                        
                        addTask(taskName, taskDescription);

                        console.log(`Task "${taskName}" added successfully!`);

                        mainMenu();
                    });

                });
                break;

            // Update Task
            case "2":
                rl.question("Enter ID to Update: ", (idToUpdate) => {
                    if(!idToDelete) {
                        console.log("ID must be a value.");
                        return;
                    }

                    if(idToDelete > currentTaskID) {
                        console.log("ID must be a valid ID.");
                        return;
                    }

                    rl.question("Enter Option to Update (1. Update Name, 2. Update Description, 3. Update Status): ", (updateChoice) => {

                        switch(updateChoice) {
                            // Update Name
                            case 1:
                                rl.question("Enter New Name: ", (updatedName) => {
                                    updateTask(idToUpdate, updateChoice, updatedName);
                                    console.log(`Name Updated To: ${updatedName}`);
                                });
                                break;
                            // Update Description
                            case 2:
                                rl.question("Enter New Description: ", (updatedDescription) => {
                                    updateTask(idToUpdate, updateChoice, updatedDescription);
                                    console.log(`Description Updated.`);
                                });
                                break;
                            // Update Status
                            case 3:
                                rl.question("Enter New Status (Todo, In Progress, Done): ", (updatedStatus) => {
                                    updateTask(idToUpdate, updateChoice, updatedStatus);
                                    console.log(`Status Updated To: ${updatedStatus}`);
                                });
                                break;
                            default:
                                console.log("Update option must be between 1 and 3.");
                                break;
                        }
                    });
                });
                break;

            // Delete a Task
            case "3":
                rl.question("Enter Task ID to Delete: ", (idToDelete) => {
                    if(!idToDelete) {
                        console.log("ID must be a value.");
                        return;
                    }

                    if(idToDelete > currentTaskID) {
                        console.log("ID must be a valid ID.");
                        return;
                    }

                    deleteTask(idToDelete);

                    mainMenu();
                });
                break;

            // List All Tasks
            case "4":
                listTasks();
                mainMenu();
                break;

            // List Tasks To Do
            case "5":
                listTasksTodo();

                mainMenu();
                break;

            // List Tasks In Progress
            case "6":
                listTasksInProgress();

                mainMenu();
                break;

            // List Tasks Done
            case "7":
                listTasksDone();

                mainMenu();
                break;

            // Exit program
            case "8":
                // Save tasks and exit
                saveTasks();

                console.log("\nExited the task tracker. Saved tasks.");
                rl.close();
                break;

            // Invalid input
            default:
                console.log("Invalid choice. Please try again.");
                mainMenu();
                break;
        }
    });
}