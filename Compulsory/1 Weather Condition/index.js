// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const weather = prompt("What is the weather like today? (sunny, rainy, snowy)");

if (weather == 'sunny') { console.log("It's sunny outside!☀️ Don't forget to wear sunscreen.");
} else if (weather == 'rainy') {
    console.log("It's rainy outside!🌧️ You should bring an umbrella.");
} else if (weather == 'snowy') {
    console.log("It's snowy outside!🥶 It might be a good idea to stay inside and keep warm.");
} else {
    console.log("Well, good luck, just be prepared for anything!😵");
}
