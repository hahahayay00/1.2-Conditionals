// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

if (num1 > num2) {
    console.log(`The maximum value is ${num1}.`);
} else {
    console.log(`The maximum value is ${num2}.`);
}
