// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const score = prompt("Enter the student's score (0-100):");

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
