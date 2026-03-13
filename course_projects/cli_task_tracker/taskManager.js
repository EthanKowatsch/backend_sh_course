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
    for (let i = 0; i < storage.tasksArray.length; i++) {
        if (storage.tasksArray[i].taskID === searchID) {
            // Update name
            if (updateType === 1) {
                storage.tasksArray[i].taskName = updateValue;
            }
            // Update description
            else if (updateType === 2) {
                storage.tasksArray[i].taskDescription = updateValue;
            }
            // Update status (normalize input)
            else if (updateType === 3) {
                const validStatuses = ["Todo", "In Progress", "Done"];
                const formattedStatus = updateValue.charAt(0).toUpperCase() + updateValue.slice(1).toLowerCase();

                if (validStatuses.includes(formattedStatus)) {
                    storage.tasksArray[i].taskStatus = formattedStatus;
                } else {
                    console.log("Invalid status. Must be: Todo, In Progress, or Done.");
                }
            } else {
                console.log("Task could not be updated.");
            }

            break;
        }
    }
}

/**
 * Function to remove a task
 * 
 * @param {number} idToDelete - ID of task to delete.
 * @returns A new array without the task that was removed.
 */
export function deleteTask(idToDelete) {
    let tempTaskArray = [];

    for (let i = 0; i < storage.tasksArray.length; i++) {
        if (idToDelete === storage.tasksArray[i].taskID) {
            continue; // skip the task to delete
        } else {
            tempTaskArray.push(storage.tasksArray[i]);
        }
    }

    // Update the storage array
    storage.tasksArray = tempTaskArray;

    // Reset task IDs sequentially
    for (let i = 0; i < storage.tasksArray.length; i++) {
        storage.tasksArray[i].taskID = i + 1;
    }

    // Update currentTaskID
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

    let tasksExist = false;

    for (let task of storage.tasksArray) {
        if (task.taskStatus === "Todo") {
            tasksExist = true;
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

    if (!tasksExist) {
        console.log("No tasks exist in this status.");
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

    let tasksExist = false;

    for (let task of storage.tasksArray) {

        if (task.taskStatus === "In Progress") {
tasksExist = true;
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

    if (!tasksExist) {
        console.log("No tasks exist in this status.");
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

    let tasksExist = false;

    for (let task of storage.tasksArray) {

        if (task.taskStatus === "Done") {
            tasksExist = true;
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

    if (!tasksExist) {
        console.log("No tasks exist in this status.");
    }
}