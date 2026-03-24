/* Create an async function that awaits two promises sequentially, logs both results. */
function makeFood() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        if(isSuccess) {
            resolve(true);
        }
        else {
            reject("Failed to make food.");
        }
    });
}

function eatFood() {
    return new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;

        if(isSuccess) {
            resolve("Ate food!");
        }
        else {
            reject("Did not eat food.");
        }
    });
}

async function logAsyncResults(params) {
    try {
        const makeFoodResults = await makeFood();
        console.log("Made food");
        
        if(makeFoodResults) {
            const eatFoodResults = await eatFood();
            console.log(eatFoodResults);
        }
    } catch (error) {
        console.log(error);
    }
}

logAsyncResults();