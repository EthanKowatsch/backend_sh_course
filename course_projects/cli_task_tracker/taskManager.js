import { tasksArray, currentTaskID } from "./storage.js";

const currentDate = new Date();

/**
 * Adds a new task to the tasksArray.
 *
 * @param {string} name - The name/title of the task.
 * @param {string} description - A short description of the task.
 *
 */
export function addTask(name, description) {
    currentTaskID += 1;

    const newTask = {
        taskName: name,
        taskID: currentTaskID,
        taskDescription: description,
        taskStatus: "Not Started",
        dateCreated: currentDate.toDateString()
    };

    tasksArray.push(newTask);
}

/**
 * Function to remove an a task
 * 
 * @param {number} idToDelete - ID of task to delete.
 * @returns A new array without the task that was to be removed.
 */
export function deleteTask(idToDelete) {
    let tempTaskArray = [];
    
    for(let i = 0; i < tasksArray.length; i++) {
        if(idToDelete === tasksArray[i].taskID) {
            continue;
        }
        else {
            tempTaskArray.push(tasksArray[i]);
        }
    }

    currentTaskID = tempTaskArray.length;

    for(let i = 0; i < tempTaskArray.length; i++) {
        tempTaskArray[i].taskID = i + 1;
    }

    return tempTaskArray;
}

/**
 * Function to update a given task by its ID.
 * 
 * @param {number} searchID - ID of task to update.
 * @param {number} updateType - Indicates which value should be updated (1. Update Name, 2. Update Description, 3. Update Status).
 * @param {string} updateValue - Holds the value to put in the updated corresponding value.
 */
export function updateTask(searchID, updateType, updateValue) {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].taskID === searchID) {
            // Update name
            if(updateType === 1) {
                tasksArray[i].taskName = updateValue;
            }
            // Update description
            else if(updateType === 2) {
                tasksArray[i].taskDescription = updateValue;
            }
            // Update status
            else if((updateType === 3) && (updateValue === "Todo" || updateValue === "In Progress" || updateValue === "Done")) {
                tasksArray[i].taskStatus = updateValue;
            }
            else{
                console.log("Task could not be updated.");
            }

            break;
        }
    }
}

/**
 * Function to list all tasks in a readable way.
 */
export function listTasks() {
    for(let i = 0; i < tasksArray.length; i++) {
        console.log(`-------------------\nTask ID: ${tasksArray[i].taskID}, Task Name: ${tasksArray[i].taskName}\nTask Description: ${tasksArray[i].taskDescription}\nTask Status: ${tasksArray[i].taskStatus}\nDate Created: ${tasksArray[i].dateCreated} -------------------\n`);
    }
}

/**
 * Function to display tasks to be started.
 */
export function listTasksTodo() {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].taskStatus === "Todo") {
            console.log(`-------------------\nTask ID: ${tasksArray[i].taskID}, Task Name: ${tasksArray[i].taskName}\nTask Description: ${tasksArray[i].taskDescription}\nTask Status: ${tasksArray[i].taskStatus}\nDate Created: ${tasksArray[i].dateCreated} -------------------\n`);
        }
    }
}

/**
 * Function to display tasks in progress
 */
export function listTasksInProgress() {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].taskStatus === "In Progress") {
            console.log(`-------------------\nTask ID: ${tasksArray[i].taskID}, Task Name: ${tasksArray[i].taskName}\nTask Description: ${tasksArray[i].taskDescription}\nTask Status: ${tasksArray[i].taskStatus}\nDate Created: ${tasksArray[i].dateCreated} -------------------\n`);
        }
    }
}

/**
 * Function to display tasks that are done.
 */
export function listTasksDone() {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].taskStatus === "Done") {
            console.log(`-------------------\nTask ID: ${tasksArray[i].taskID}, Task Name: ${tasksArray[i].taskName}\nTask Description: ${tasksArray[i].taskDescription}\nTask Status: ${tasksArray[i].taskStatus}\nDate Created: ${tasksArray[i].dateCreated} -------------------\n`);
        }
    }
}