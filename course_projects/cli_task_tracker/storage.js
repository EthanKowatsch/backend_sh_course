export let tasksArray = [];
export let currentTaskID;

import fs from "fs";

export function loadTasks() {
    let tempObj;

    fs.readFile("task.JSON", "utf8", (err, jsonData) => {
        if(err) {
            console.error("Error reading file.", err);
            return;
        }

        tempObj = JSON.parse(jsonData);

        for(let i = 0; i < tempObj.length; i++) {
            tasksArray.push(tempObj[i]);
        }

        currentTaskID = tempObj.length;
    });
}

export function saveTasks() {
    
}