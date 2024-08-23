// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const password = prompt("Enter your password:");

if (password.length >= 8 && (password.includes("@") || password.includes("#") || password.includes("$"))) {
    console.log("Strong password!");
} else {
    console.log("Weak password. Consider making it longer and adding special characters.");
}
