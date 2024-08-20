### Topic: Maximum of 2 Numbers

In this lesson, you’ll learn how to write a program that compares two numbers and determines which one is larger. Regardless of whether you input the larger number first or second, the program will identify and display the maximum value. 

This exercise will help you practice using `if-else` statements to make decisions based on the values of variables.

## Steps

### 1. Ask for Two Numbers

We’ll start by using `prompt()` to ask the user to input two numbers. These numbers will be compared to find the maximum value.

```javascript
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");
```

### 2. Use an If Statement to Compare the Numbers

Check if the first number (`num1`) is greater than the second number (`num2`). If it is, print that `num1` is the maximum value.

```javascript
if (num1 > num2) {
    console.log(`The maximum value is ${num1}.`);
}
```

### 3. Add an Else Statement to Handle the Other Condition

If the first condition is false (meaning `num2` is greater than or equal to `num1`), print that `num2` is the maximum value.

```javascript
else {
    console.log(`The maximum value is ${num2}.`);
}
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");

if (num1 > num2) {
    console.log(`The maximum value is ${num1}.`);
} else {
    console.log(`The maximum value is ${num2}.`);
}
```

</details>

## Explanation

- The program asks the user for two numbers and compares them using an `if-else` statement.
- If `num1` is greater than `num2`, it prints that `num1` is the maximum value.
- If `num1` is not greater (meaning `num2` is either equal to or greater than `num1`), the program prints that `num2` is the maximum value.
- This logic ensures that the correct maximum value is displayed, regardless of the order of input.

## Important Notes

- **Input:** Ensure the input is numerical. In real scenarios, consider converting strings to numbers using `parseFloat()` or `parseInt()`.
- **Equality:** If the numbers are equal, the program will display `num2` as the maximum. To handle equality explicitly, add a separate condition.