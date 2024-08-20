### Topic: Traffic Light Simulator

Time to bring some real-world logic into your coding practice! In this lesson, you’ll create a traffic light simulator that asks the user for a traffic light color (red, yellow, or green) and then tells them what action to take. Let’s make sure everyone knows when to stop, slow down, or go—just like in real traffic! 🚦

## Steps

### 1. Ask the User for a Traffic Light Color

Start by using `prompt()` to ask the user to input a traffic light color. We’ll be working with three colors: red, yellow, and green.

```javascript
const color = prompt("Enter the traffic light color (red, yellow, green):").toLowerCase();
```

### 2. Use a Switch Statement to Determine the Action

Next, use a `switch` statement to decide the action based on the color the user inputs.

```javascript
let action;

switch (color) {
    case "red":
        action = "Stop";
        break;
    case "yellow":
        action = "Slow down";
        break;
    case "green":
        action = "Go";
        break;
    default:
        action = "Invalid color! Please enter red, yellow, or green.";
}
```

### 3. Display the Action to the User

Finally, use `console.log()` to display the appropriate action to the user.

```javascript
console.log(action);
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const color = prompt("Enter the traffic light color (red, yellow, green):").toLowerCase();

let action;

switch (color) {
    case "red":
        action = "Stop";
        break;
    case "yellow":
        action = "Slow down";
        break;
    case "green":
        action = "Go";
        break;
    default:
        action = "Invalid color! Please enter red, yellow, or green.";
}

console.log(action);
```

</details>

## Explanation

- **User Input:** The program asks the user to input a traffic light color. Using `.toLowerCase()` ensures that the input is case-insensitive, meaning it doesn’t matter if the user types "Red", "RED", or "red".
  
- **Switch Statement:** The `switch` statement checks the input color and matches it to the correct action (stop, slow down, go). If the color doesn’t match any of the cases, the `default` case provides feedback that the input is invalid.

- **Displaying the Action:** Based on the user’s input, the corresponding action (like "Stop" for red) is displayed using `console.log()`.

## Important Notes

- **Input Validation:** The program uses `.toLowerCase()` to handle different cases of user input, making the program more robust. However, it assumes that the user will enter one of the expected colors. You might want to add additional checks for unexpected inputs.
