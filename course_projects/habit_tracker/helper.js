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

function printMenu() {
    console.log("\n--- Habit Tracking Tool ---");
    console.log("1 - Add New Habit");
    console.log("2 - View All Habits");
    console.log("3 - View Specific Habit");
    console.log("4 - Delete Habit");
    console.log("5 - Exit");
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
                printAllHabits();

                mainMenu();
                break;
            case "3":
                rl.question("Enter Habit to View: ", (habitNameToView) => {
                    if (!habitNameToView.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const habitIndex = habitArray.findIndex(habitNameToView);

                    if(habitIndex === -1) {
                        console.log("Habit does not exist.");
                        mainMenu();
                        return;
                    }

                    habitArray[habitIndex].getSummary();
                    mainMenu();
                });

                break;
            case "4":
                rl.question("Enter Habit Name to Delete: ", (habitNameToDelete) => {
                    if (!habitNameToDelete.trim()) {
                        console.log("Habit name must not be empty.");
                        mainMenu();
                        return;
                    }

                    const index = habitArray.findIndex(
                        habit => habit.habitName === habitNameToDelete
                    );

                    if (index === -1) {
                        console.log("Habit does not exist.");
                        mainMenu();
                        return;
                    }

                    habitArray.splice(index, 1);

                    console.log("Habit Deleted Successfully.");
                    mainMenu();
                });

                break;
            case "5":
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