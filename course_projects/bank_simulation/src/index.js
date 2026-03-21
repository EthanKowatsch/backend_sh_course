import { mainMenu } from "./navigation.js";
import { loadAccounts, loadTransactions } from "./utils/jsonHandler.js";

loadAccounts();
loadTransactions();

mainMenu();