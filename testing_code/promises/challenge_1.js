// Create a promise that resolves with the message "Success!" after 2 seconds
function printSuccess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true;
            
            if(isSuccess) {
                resolve("Success!");
            }
            else {
                reject("Error.");
            }
        }, 2000);
    });
}

printSuccess()
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });