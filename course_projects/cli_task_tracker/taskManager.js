import { tasksArray, currentTaskID } from "./storage.js";

const currentDate = new Date();

/**
 * Adds a new task to the tasksArray.
 *
 * @param {string} name - The name/title of the task.
 * @param {string} description - A short description of the task.
 *
 * @example
 * addTask("Buy groceries", "Milk, eggs, and bread");
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

export function deleteTask() {

}

export function updateTask() {

}

export function listTasks() {

}

export function listTasksNotDone() {
    
}

export function listTasksInProgress() {

}

export function listTasksDone() {
    
}