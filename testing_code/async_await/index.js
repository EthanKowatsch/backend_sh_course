function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked) {
                resolve("You walked the dog.");
            } 
            else {
                reject("You didn't walk the dog");                
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;

            if(kitchenCleaned) {
                resolve("You cleaned the kitchen.");
            }
            else {
                reject("You didn't clean the kitchen.");
            }
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookTrashOut = true;

            if(tookTrashOut) {
                resolve("You took the trash out.");
            }
            else {
                reject("You didn't take the trash out.");
            }
        }, 500);
    });
}

async function todoChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores");
    }
    catch (error) {
        console.log(error);
    }
}

todoChores();