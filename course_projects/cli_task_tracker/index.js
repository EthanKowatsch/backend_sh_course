import { mainMenu } from "./menu.js";
import { currentTaskID, loadTasks } from "./storage.js";

if(currentTaskID != 0) {
    loadTasks();
}

mainMenu();