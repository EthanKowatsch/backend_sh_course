export let habitArray = [];

export class Habit {
    constructor(habitName, habitStreak = 0) {
        this.habitName = habitName;
        this.habitStreak = habitStreak;
    }

    incrementStreak() {
        this.habitStreak += 1;
    }

    resetStreak() {
        this.habitStreak = 0;
    }

    getSummary() {
        console.log(`Habit Name: ${this.habitName} | Habit Streak: ${this.habitStreak}`);
    }
}