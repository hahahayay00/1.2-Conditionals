### Topic: Grading System (optimized)
The fascinating part of coding is there’s always more than one way to solve a problem. As you get better, you'll start refining your solutions to make them simpler and more efficient—that's called `refactoring`. 

Let’s see how we can simplify the grading system we just built, using fewer conditions to get the same result.

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

Next, check if the score is 80 or above. If it is, assign a grade of 'B'.

```javascript
else if (score >= 80) {
    console.log("Grade: B");
}
```

### 4. Add Another Else-If Statement for the Third Grade Range

Then, check if the score is 70 or above. If it is, assign a grade of 'C'.

```javascript
else if (score >= 70) {
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
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

</details>


## Explanation

- **Logic Without `&&`:** The conditions are checked in order from highest to lowest. Since the program evaluates these conditions sequentially, once a match is found, the corresponding block of code runs, and the remaining conditions are skipped. For example, if the score is 85, it’s first checked against `score >= 90` (which is false), then against `score >= 80` (which is true), so the grade 'B' is assigned, and no further checks are needed.

- **Why It Works:** The sequential order ensures that each score falls into the correct range without needing to explicitly define the upper limit for each grade. By arranging the conditions from highest to lowest, the program naturally handles the ranges correctly. If a score is 85, it won't trigger the `score >= 70` condition because the `score >= 80` condition is checked first and is true.

This method simplifies the code and ensures that each score is accurately evaluated to determine the correct grade.