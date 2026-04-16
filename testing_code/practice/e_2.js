let arr = [1, 5, 4, 9, 10, 14];

// Sum all numbers
function sumArray(array) {
    let sum = 0;
    
    array.forEach(num => {
        sum += num;
    });

    return sum;
}

// Find largest number
function largestNum(array) {
    let largestNumber = array[0];
    
    array.forEach(num => {
        if(num > largestNumber) {
            largestNumber = num;
        }
    });

    return largestNumber;
}

// Create new array of each number doubled
let doubledArray = arr.map(num => num * 2);

console.log(`Original Array: ${arr}`);
console.log(`Array Summed: ${sumArray(arr)}`);
console.log(`Largest Number in the Array: ${largestNum(arr)}`);
console.log(`Doubled Array: ${doubledArray}`);