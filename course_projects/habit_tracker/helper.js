import { Habit, habitArray } from "./Habit.js";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printAllHabits() {
    if(habitArray.length >= 1) {
        habitArray.forEach(habit => {
            habit.getSummary();
        });
    }
    else {
        console.log("No habits currently created.");
    }
}

function deleteHabit(indexToDelete) {
    return habitArray.filter((_, index) => index !== indexToDelete);
}

function findHabitIndex(habitNameIndex) {
    return habitArray.findIndex(habit => habit.habitName === habitNameIndex);
}

function printMenu() {
    console.log("\n--- Habit Tracking Tool ---");
    console.log("1 - Add New Habit");
    console.log("2 - Modify Streak of Specific Habit");
    console.log("3 - View All Habits");
    console.log("4 - View Specific Habit");
    console.log("5 - Delete Habit");
    console.log("6 - Exit");
}

export function mainMenu() {
    printMenu();

    rl.question("Enter Choice: ", (userChoice) => {
        switch(userChoice) {
            case "1":
                rl.question("Enter New Habit Name: ", (newHabitName) => {
                    if (!newHabitName.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const newHabit = new Habit(newHabitName);

                    habitArray.push(newHabit);

                    mainMenu();
                });

                break;
            case "2":
                rl.question("Name of Streak to Modify: ", (modifyHabitName) => {
                    if (!modifyHabitName.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const habitIndex = findHabitIndex(modifyHabitName);

                    if (habitIndex === -1) {
                        console.log("Habit does not exist.");
                        mainMenu();
                        return;
                    }

                    rl.question("Modify Streak (+ to increment, - to reset): ", (streakModifier) => {
                        if (!streakModifier.trim()) {
                            console.log("Streak modifier must not be empty.");
                            mainMenu();
                            return;
                        }
                        
                        switch(streakModifier) {
                            case "+":
                                habitArray[habitIndex].incrementStreak();
                                console.log("Streak incremented.");

                                mainMenu();
                                break;
                            case "-":
                                habitArray[habitIndex].resetStreak();
                                console.log("Streak reset.");

                                mainMenu();
                                break;
                            default:
                                console.log("Error inputting streak modifier")
                                break;
                        }
                    });
                });
                
                break;
            case "3":
                printAllHabits();

                mainMenu();
                break;
            case "4":
                rl.question("Enter Habit to View: ", (habitNameToView) => {
                    if (!habitNameToView.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const habitIndex = findHabitIndex(habitNameToView);

                    if(habitIndex === -1) {
                        console.log("Habit does not exist.");
                        mainMenu();
                        return;
                    }

                    habitArray[habitIndex].getSummary();
                    mainMenu();
                });

                break;
            case "5":
                rl.question("Enter Habit Name to Delete: ", (habitNameToDelete) => {
                    if (!habitNameToDelete.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const habitIndex = findHabitIndex(habitNameToDelete);

                    if (habitIndex === -1) {
                        console.log("Habit does not exist.");
                        mainMenu();
                        return;
                    }

                    habitArray.splice(habitIndex, 1);

                    console.log("Habit Deleted Successfully.");
                    mainMenu();
                });

                break;
            case "6":
                console.log("Exiting habit tracker.");
                rl.close();
                break;
            default:
                console.log("Error inputting choice.");
                mainMenu();
                break;
        }
    });
}