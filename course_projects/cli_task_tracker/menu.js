import { addTask, deleteTask, updateTask, listTasks, listTasksTodo, listTasksInProgress, listTasksDone } from "./taskManager.js";
import { storage, saveTasks } from "./storage.js";
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
                    if (!taskName.trim()) {
                        console.log("Task name must not be empty.");
                        mainMenu();
                        return;
                    }

                    rl.question("Enter task description: ", (taskDescription) => {
                        if (!taskDescription.trim()) {
                            console.log("Task description must not be empty.");
                            mainMenu();
                            return;
                        }

                        addTask(taskName, taskDescription);
                        console.log(`Task "${taskName}" added successfully.`);
                        mainMenu();
                    });
                });
                break;

            // Update Task
            case "2":
                rl.question("Enter ID to Update: ", (idToUpdate) => {

                    if (!idToUpdate || isNaN(idToUpdate) || idToUpdate < 1 || idToUpdate > storage.currentTaskID) {
                        console.log("Invalid ID");
                        mainMenu();
                        return;
                    }

                    rl.question("Enter Option to Update (1. Update Name, 2. Update Description, 3. Update Status): ", (updateChoice) => {

                        switch(updateChoice) {

                            case "1":
                                rl.question("Enter New Name: ", (updatedName) => {
                                    updateTask(Number(idToUpdate), 1, updatedName);
                                    console.log(`Name Updated To: ${updatedName}`);
                                    mainMenu();
                                });
                                break;

                            case "2":
                                rl.question("Enter New Description: ", (updatedDescription) => {
                                    updateTask(Number(idToUpdate), 2, updatedDescription);
                                    console.log(`Description Updated.`);
                                    mainMenu();
                                });
                                break;

                            case "3":
                                rl.question("Enter New Status (Todo, In Progress, Done): ", (updatedStatus) => {
                                    updateTask(Number(idToUpdate), 3, updatedStatus);
                                    console.log(`Status Updated To: ${updatedStatus}`);
                                    mainMenu();
                                });
                                break;

                            default:
                                console.log("Update option must be between 1 and 3.");
                                mainMenu();
                                break;
                        }
                    });
                });
                break;

            // Delete Task
            case "3":
                rl.question("Enter Task ID to Delete: ", (idToDelete) => {

                    if (!idToDelete) {
                        console.log("ID must be a value.");
                        mainMenu();
                        return;
                    }

                    if (isNaN(idToDelete) || idToDelete < 1 || idToDelete > storage.currentTaskID) {
                        console.log("ID must be a valid ID.");
                        mainMenu();
                        return;
                    }

                    deleteTask(Number(idToDelete));
                    console.log(`Task ${idToDelete} deleted.`);
                    mainMenu();
                });
                break;

            // List All Tasks
            case "4":
                listTasks();
                mainMenu();
                break;

            // List Tasks Todo
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

            // Exit
            case "8":
                saveTasks();
                console.log("\nExited the task tracker. Saved tasks.");
                rl.close();
                break;

            default:
                console.log("Invalid choice. Please try again.");
                mainMenu();
                break;
        }
    });
}