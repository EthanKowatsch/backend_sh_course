import { storage } from "./storage.js";

/**
 * Adds a new task to the tasksArray.
 *
 * @param {string} name - The name/title of the task.
 * @param {string} description - A short description of the task.
 */
export function addTask(name, description) {

    const currentDate = new Date();

    const newTask = {
        taskName: name,
        taskID: storage.currentTaskID + 1,
        taskDescription: description,
        taskStatus: "Todo",
        dateCreated: currentDate.toDateString()
    };

    storage.tasksArray.push(newTask);
    storage.currentTaskID += 1;
}

/**
 * Function to update a given task by its ID.
 * 
 * @param {number} searchID
 * @param {number} updateType
 * @param {string} updateValue
 */
export function updateTask(searchID, updateType, updateValue) {
    if(currentTaskID < 1) {
        console.log("No tasks to update.");
        return;
    }

    for (let i = 0; i < storage.tasksArray.length; i++) {

        if (storage.tasksArray[i].taskID === searchID) {

            if (updateType === 1) {
                storage.tasksArray[i].taskName = updateValue;
            }

            else if (updateType === 2) {
                storage.tasksArray[i].taskDescription = updateValue;
            }

            else if (
                updateType === 3 &&
                (updateValue === "Todo" ||
                 updateValue === "In Progress" ||
                 updateValue === "Done")
            ) {
                storage.tasksArray[i].taskStatus = updateValue;
            }

            else {
                console.log("Task could not be updated.");
            }

            return;
        }
    }

    console.log("Task not found.");
}

/**
 * Deletes a task by ID
 */
export function deleteTask(idToDelete) {
    if(currentTaskID < 1) {
        console.log("No tasks to update.");
        return;
    }    

    const index = storage.tasksArray.findIndex(
        task => task.taskID === idToDelete
    );

    if (index === -1) {
        console.log("Task not found.");
        return;
    }

    storage.tasksArray.splice(index, 1);

    // Reassign IDs so they stay sequential
    for (let i = 0; i < storage.tasksArray.length; i++) {
        storage.tasksArray[i].taskID = i + 1;
    }

    storage.currentTaskID = storage.tasksArray.length;
}

/**
 * List all tasks
 */
export function listTasks() {

    if (storage.tasksArray.length === 0) {
        console.log("No tasks to display. Add a task.");
        return;
    }

    for (let task of storage.tasksArray) {

        console.log(
`--------------------------------------
Task ID: ${task.taskID}
Task Name: ${task.taskName}
Task Description: ${task.taskDescription}
Task Status: ${task.taskStatus}
Date Created: ${task.dateCreated}
--------------------------------------`
        );
    }
}

/**
 * List Todo tasks
 */
export function listTasksTodo() {

    if (storage.tasksArray.length === 0) {
        console.log("No tasks to display. Add a task.");
        return;
    }

    for (let task of storage.tasksArray) {

        if (task.taskStatus === "Todo") {

            console.log(
`--------------------------------------
Task ID: ${task.taskID}
Task Name: ${task.taskName}
Task Description: ${task.taskDescription}
Task Status: ${task.taskStatus}
Date Created: ${task.dateCreated}
--------------------------------------`
            );
        }
    }
}

/**
 * List In Progress tasks
 */
export function listTasksInProgress() {

    if (storage.tasksArray.length === 0) {
        console.log("No tasks to display. Add a task.");
        return;
    }

    for (let task of storage.tasksArray) {

        if (task.taskStatus === "In Progress") {

            console.log(
`--------------------------------------
Task ID: ${task.taskID}
Task Name: ${task.taskName}
Task Description: ${task.taskDescription}
Task Status: ${task.taskStatus}
Date Created: ${task.dateCreated}
--------------------------------------`
            );
        }
    }
}

/**
 * List Done tasks
 */
export function listTasksDone() {

    if (storage.tasksArray.length === 0) {
        console.log("No tasks to display. Add a task.");
        return;
    }

    for (let task of storage.tasksArray) {

        if (task.taskStatus === "Done") {

            console.log(
`--------------------------------------
Task ID: ${task.taskID}
Task Name: ${task.taskName}
Task Description: ${task.taskDescription}
Task Status: ${task.taskStatus}
Date Created: ${task.dateCreated}
--------------------------------------`
            );
        }
    }
}