const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("It worked!");
    } else {
        reject("Something went wrong");
    }
});

promise 
  .then(result => console.log(result))
  .catch(error => console.error(error));
