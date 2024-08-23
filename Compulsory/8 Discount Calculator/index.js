// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();

// Prompt user for the original price of the item
const price = parseFloat(prompt("Enter the original price of the item: "));

// Prompt user for their membership status
const membership = prompt("Enter your membership status (regular, gold, platinum): ")

// Calculate and display the final price based on membership status
if (membership == 'regular') {
    console.log(`The final price after discount is: $${(price * 0.9).toFixed(2)}`);
} else if (membership == 'gold') {
    console.log(`The final price after discount is: $${(price * 0.8).toFixed(2)}`);
} else if (membership == 'platinum') {
    console.log(`The final price after discount is: $${(price * 0.7).toFixed(2)}`);
} else {
    console.log("Invalid membership status entered.");
}