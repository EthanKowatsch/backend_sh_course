import { mainMenu } from "./menu.js";
import { storage, loadTasks } from "./storage.js";

if(storage.currentTaskID != 0) {
    loadTasks();
}

mainMenu();