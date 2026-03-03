// Given 
const config = {
  host: "localhost",
  port: 3000
};

// Destructure the host, port, and protocol and log it out
const { host, port, protocol = "http" } = config;

console.log(`${protocol}://${host}:${port}`);