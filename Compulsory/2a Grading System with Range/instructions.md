### Topic: Grading System

In this lesson, you’ll create a simple grading system for a school that assigns a letter grade based on a student’s score. This will help you practice using `if`, `else if`, and `else` statements to make decisions based on different score ranges.

## Steps

### 1. Ask for the Student's Score

We’ll start by using `prompt()` to ask the user to input the student’s score. The score will be a number between 0 and 100.

```javascript
const score = prompt("Enter the student's score (0-100):");
```

### 2. Use an If Statement for the Highest Grade

First, check if the score is 90 or above. If it is, assign a grade of 'A'.

```javascript
if (score >= 90) {
    console.log("Grade: A");
}
```

### 3. Add an Else-If Statement for the Next Grade Range

Next, check if the score is between 80 and 89. Use the `&&` operator to ensure the score falls within this range.

```javascript
else if (score >= 80 && score < 90) {
    console.log("Grade: B");
}
```

### 4. Add Another Else-If Statement for the Third Grade Range

Then, check if the score is between 70 and 79. Again, use the `&&` operator to specify the range.

```javascript
else if (score >= 70 && score < 80) {
    console.log("Grade: C");
}
```

### 5. Use an Else Statement for the Failing Grade

Finally, if the score is below 70, assign a grade of 'F'.

```javascript
else {
    console.log("Grade: F");
}
```

<details>
<summary>Full Code</summary>

```javascript
const score = prompt("Enter the student's score (0-100):");

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80 && score < 90) {
    console.log("Grade: B");
} else if (score >= 70 && score < 80) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

</details>


## Explanation

- **Using `>=` and `<`:** The `>=` operator checks if the score is greater than or equal to a certain value, ensuring that scores like 90 are included in the `A` grade. The `<` operator checks if the score is less than the upper bound of a range. This combination ensures that scores are categorized correctly without overlap.

- **Why We Use `score >= 70 && score < 80`:** This condition ensures that the score falls between 70 (inclusive) and 80 (exclusive). The `&&` operator is used to combine these two conditions, meaning both must be true for the block of code to execute. 
- Writing it as `score >= 70 && < 80` would be incorrect because each condition must be complete and valid on its own; JavaScript needs the variable explicitly referenced on both sides of the `&&` operator.

## Important Notes

- **Best Practices:**
  - Always use `>=` or `>` carefully based on whether you want to include or exclude the boundary value.
  - When checking for a range, use `&&` to ensure that both conditions are met. This guarantees that the score falls within the intended range.
  - Use clear and consistent naming for variables. In this case, `score` is an appropriate and descriptive name.
  - Structure your conditions from highest to lowest when using `if-else` statements. This ensures that the first matching condition is executed.

- **Avoid Overlapping Ranges:**
  - Ensure that your conditions do not overlap. For instance, using `score >= 80` without a corresponding `<` check could lead to errors where multiple conditions are true at once. This is why combining `>=` and `<` is crucial for defining clear and non-overlapping ranges.