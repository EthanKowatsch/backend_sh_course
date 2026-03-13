import fs from "fs";

export const storage = {
    tasksArray: [],
    currentTaskID: 0
};

/**
 * Loads the existing tasks into the task array
 */
export function loadTasks() {
    let tempObj;

    try {
        const jsonData = fs.readFileSync("task.JSON", "utf8");

        if (!jsonData) {
            console.log("No tasks yet — starting with empty task list.");
            return;
        }

        tempObj = JSON.parse(jsonData);

        for (let i = 0; i < tempObj.length; i++) {
            tasksArray.push(tempObj[i]);
        }

        currentTaskID = tempObj.length;

    } catch (err) {
        console.error("Error reading JSON file.", err);
    }
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