function createPasswordChecker(correctPassword) {
    return function(passwordInput) {
        if(passwordInput === correctPassword) {
            return true;
        }
        else {
            return false;
        }
    }
}

const passwordChecker = createPasswordChecker("HelloWorld#1");

console.log(passwordChecker("Password1234")); // should return false
console.log(passwordChecker("HelloWorld#1")); // should return true