import { mainMenu } from "./menu.js";
import { addTask, deleteTask, updateTask, listTasks, listTasksNotDone, listTasksInProgress, listTasksDone } from "./taskManager.js";
import { loadTasks, saveTasks } from "./storage.js";

mainMenu();