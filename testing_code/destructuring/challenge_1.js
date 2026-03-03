// Given the following
const config = {
  host: "localhost",
  port: 3000,
  language: "Java",
  framework: "Springboot"
};

// Destructure this into individual variables
const { host: hostType, port: serverPort } = config;

console.log(`Server Host Type: ${hostType} - Server Port: ${portNumber}`);