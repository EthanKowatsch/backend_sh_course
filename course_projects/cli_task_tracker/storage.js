export let tasksArray = [];
export let currentTaskID;

import fs from "fs";

/**
 * 
 * Loads the existing tasks into the task array
 * 
 */
export function loadTasks() {
    let tempObj;

    fs.readFile("task.JSON", "utf8", (err, jsonData) => {
        if(err) {
            console.error("Error reading JSON file.", err);
            return;
        }

        tempObj = JSON.parse(jsonData);

        for(let i = 0; i < tempObj.length; i++) {
            tasksArray.push(tempObj[i]);
        }

        currentTaskID = tempObj.length;
    });
}

/**
 * Function to save tasks to JSON
 */
export function saveTasks() {
    let tasksJSON = JSON.stringify(tasksArray);

    fs.writeFile("task.JSON", tasksJSON, (err) => {
        if(err) {
            console.log("Error writing to JSON file.", err);
        }
    });
}