// Create
function createResettableCounter() {
    let count = 0;

    return {
        increment: function() {
            return count += 1;
        },
        reset: function() {
            count = 0;
        }
    };
}

const counter = createResettableCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

counter.reset();

console.log(counter.increment());