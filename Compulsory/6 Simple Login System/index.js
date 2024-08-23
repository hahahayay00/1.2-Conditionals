// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const correctUsername = "user123";
const correctPassword = "abc456";

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

if (username == correctUsername && password == correctPassword) {
    console.log("Login successful! Welcome back.");
} else {
    console.log("Login failed. Incorrect username or password.");
}
