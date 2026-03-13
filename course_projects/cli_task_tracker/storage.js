import fs from "fs";

export const storage = {
    tasksArray: [],
    currentTaskID: 0
};

/**
 * Loads the existing tasks into the task array
 */
export function loadTasks() {
    try {
        const jsonData = fs.readFileSync("task.JSON", "utf8");

        if (!jsonData || jsonData.trim() === "") {
            console.log("No tasks yet — starting with empty task list.");
            return;
        }

        const tempObj = JSON.parse(jsonData);

        for (let i = 0; i < tempObj.length; i++) {
            storage.tasksArray.push(tempObj[i]);
        }

        storage.currentTaskID = storage.tasksArray.length;

    } catch (err) {
        console.error("Error reading JSON file.", err);
    }
}

/**
 * Saves tasks to JSON
 */
export function saveTasks() {
    try {
        fs.writeFileSync("task.JSON", JSON.stringify(storage.tasksArray, null, 2), "utf8");
    } catch (err) {
        console.error("Error saving tasks.", err);
    }
}