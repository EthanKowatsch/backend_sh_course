/* Convert a promise that resolves after 3 seconds into an async/await function */
function resolvePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            
            if(isSuccess) {
                resolve("Success!");
            }
            else {
                reject("Error.");
            }
        }, 3000);
    });
}

async function runPromise() {
    try {
        const promiseResult = await resolvePromise();
        console.log(promiseResult);
    }
    catch(error) {
        console.log(error);
    }
}

runPromise();