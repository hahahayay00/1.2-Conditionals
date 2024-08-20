### Topic: Day of the Week (Using Switch Case)

Today, you’ll use a `switch` statement to build a program that takes a number between 1 and 7 from the user and tells them what day of the week it corresponds to. It’s a quick and fun way to practice handling different cases in JavaScript. Let’s code our way through the week—let’s go! 🌟

## Steps

### 1. Ask the User for a Number

We’ll start by using `prompt()` to ask the user to input a number between 1 and 7. This number will correspond to a day of the week.

```javascript
const dayNumber = prompt("Enter a number between 1 and 7:");
```

### 2. Use a Switch Statement to Determine the Day

Next, use a `switch` statement to match the user’s input to the corresponding day of the week.

```javascript
let dayName;

switch (parseInt(dayNumber)) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid number! Please enter a number between 1 and 7.";
}
```

### 3. Display the Day of the Week

Finally, use `console.log()` to display the day of the week to the user.

```javascript
console.log(dayName);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const dayNumber = prompt("Enter a number between 1 and 7:");

let dayName;

switch (parseInt(dayNumber)) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid number! Please enter a number between 1 and 7.";
}

console.log(dayName);
```

</details>

## Explanation

- **User Input:** The program prompts the user to enter a number between 1 and 7. This number is then converted to an integer using `parseInt()` to ensure it’s a valid number for the `switch` statement.
  
- **Switch Statement:** The `switch` statement checks the input number and assigns the corresponding day of the week to the `dayName` variable. Each `case` corresponds to a number, and the `break` statement ensures the program exits the `switch` once the correct case is found.

- **Default Case:** If the user inputs a number outside the 1-7 range, the `default` case is triggered, providing a message that prompts the user to enter a valid number.

- **Displaying the Result:** The final result, whether it’s a day of the week or an error message, is displayed using `console.log()`.

## Important Notes

- **Switch vs. If-Else:** While this example uses a `switch` statement, similar logic could be achieved with `if-else` statements. The `switch` is often preferred when there are multiple discrete cases to handle, as it can be cleaner and more readable.
  
- **Clear Output:** Providing a clear message when an invalid number is entered helps improve user experience, guiding them to the correct input range.

By using a `switch` statement, you can easily map numbers to specific values, like days of the week. This simply means that each number you input will be associated with a particular day, allowing your program to quickly find the correct match.