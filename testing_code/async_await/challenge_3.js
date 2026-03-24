// Function to fetch user
function fetchUser() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
            const success = Math.random() > 0.5;

            if(success) {
			    resolve({ id:1, name:"Ethan" });
            }
            else {
                reject("Could not fetch user.");
            }
       },1000);
    });
}

// Function to store logged posts
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["New picture", "Blog post"]);
        }, 1000);
    });
}

// Function to fetch comments
function fetchComments() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Nice!", "Cool!"]), 1000);
    });
}

async function logUserInfo() {
    try {
        const user = await fetchUser();
        console.log(`User's name is ${user.name}`);

        const [posts, comments] = await Promise.all([
            fetchPosts(), 
            fetchComments()
        ]);
        
        console.log(`Posts: ${posts.join(", ")}`);
        console.log(`Comments: ${comments.join(", ")}`);
    }
    catch (error) {
        console.log(error);
    }
}

logUserInfo();