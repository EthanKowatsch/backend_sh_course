import { mainMenu } from "./menu.js";
import { storage, loadTasks } from "./storage.js";

loadTasks();

mainMenu();