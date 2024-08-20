### Topic: Maximum of 3 Numbers

Now that you're familiar with comparing 2 numbers, let's bump it up a notch by comparing between 3 numbers! 

No matter which order you input the numbers, the program will correctly identify and display the maximum value. This exercise builds on your understanding of `if-else` statements to handle more complex comparisons.

## Steps

### 1. Ask for Three Numbers

We’ll start by using `prompt()` to ask the user to input three numbers. These numbers will be compared to find the maximum value.

```javascript
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");
const num3 = prompt("Enter the third number:");
```

### 2. Use If Statements to Compare the Numbers

Check if the first number (`num1`) is greater than both the second (`num2`) and the third (`num3`) numbers. If it is, print that `num1` is the maximum value.

```javascript
if (num1 > num2 && num1 > num3) {
    console.log(`The maximum value is ${num1}.`);
}
```

### 3. Add an Else-If Statement for the Second Number

If `num1` is not the greatest, check if `num2` is greater than `num3`. If it is, print that `num2` is the maximum value.

```javascript
else if (num2 > num3) {
    console.log(`The maximum value is ${num2}.`);
}
```

### 4. Use an Else Statement for the Third Number

If neither `num1` nor `num2` is the greatest, then `num3` must be the maximum value. Print that `num3` is the maximum value.

```javascript
else {
    console.log(`The maximum value is ${num3}.`);
}
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const num1 = prompt("Enter the first number:");
const num2 = prompt("Enter the second number:");
const num3 = prompt("Enter the third number:");

if (num1 > num2 && num1 > num3) {
    console.log(`The maximum value is ${num1}.`);
} else if (num2 > num3) {
    console.log(`The maximum value is ${num2}.`);
} else {
    console.log(`The maximum value is ${num3}.`);
}
```

</details>

## Explanation

- The program asks the user for three numbers and compares them using `if-else` statements.
- It first checks if `num1` is greater than both `num2` and `num3`.
- If `num1` is not the largest, it then checks if `num2` is greater than `num3`.
- If neither `num1` nor `num2` is the largest, `num3` is determined to be the maximum.
- This logic ensures that the correct maximum value is displayed, regardless of the order in which the numbers are input.

## Important Notes

- **Input:** Ensure the input is numerical. For better accuracy, consider converting inputs using `parseFloat()` or `parseInt()`.
- **Complexity:** The use of `&&` ensures that comparisons are correctly handled when evaluating multiple conditions.