import { Habit, habitArray } from "./Habit.js";

export function printAllHabits() {
    if(habitArray.length >= 1) {
        habitArray.forEach(habit => {
            habit.getSummary();
        });
    }
    else {
        console.log("No habits currently created.");
    }
}

export function findHabitIndex(habitNameIndex) {
    return habitArray.findIndex(
        habit => habit.habitName?.toLowerCase() === habitNameIndex.toLowerCase()
    );
}

export function checkUserInput(input, message) {
    if (!input.trim()) {
        console.log(message);
        return false;
    }
    return true;
}