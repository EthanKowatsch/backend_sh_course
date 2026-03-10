const userMap = new Map();

userMap.set(1, "Admin");

userMap.set(2, "User");

userMap.set(3, "Moderator");

for(const [key, role] of userMap) {
    console.log(`User ${key}: ${role}`);
}