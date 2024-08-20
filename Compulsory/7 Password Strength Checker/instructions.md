### Topic: Password Strength Checker

Let’s give it a go at building a basic password strength checker! You’ll write a program that evaluates the strength of a user’s password based on its length and the presence of special characters. 

By the end of this lesson, you’ll know how to use the `.length` property and how to check for specific characters in a string with `.include` property.

## Steps

### 1. Ask the User to Input a Password

We’ll start by using `prompt()` to ask the user to input a password.

```javascript
const password = prompt("Enter your password:");
```

### 2. Check the Length of the Password

Use an `if` statement to check if the password is at least 8 characters long. The `.length` property helps us do this by returning the number of characters in the string.

```javascript
if (password.length >= 8) {
    console.log("Password length is sufficient.");
}
```

### 3. Check for Special Characters

Next, use another `if` statement to check if the password contains at least one special character (like `@`, `#`, `$`, etc.). 

```javascript
if (password.includes("@") || password.includes("#") || password.includes("$")) {
    console.log("Password contains a special character.");
}
```

### 4. Combine Checks to Evaluate Password Strength

Now, combine the checks to determine the overall strength of the password. If the password is both long enough and contains a special character, it’s strong. Otherwise, it’s weak.

```javascript
if (password.length >= 8 && (password.includes("@") || password.includes("#") || password.includes("$"))) {
    console.log("Strong password!");
} else {
    console.log("Weak password. Consider making it longer and adding special characters.");
}
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const password = prompt("Enter your password:");

if (password.length >= 8 && (password.includes("@") || password.includes("#") || password.includes("$"))) {
    console.log("Strong password!");
} else {
    console.log("Weak password. Consider making it longer and adding special characters.");
}
```

</details>

## Explanation

- **`.length` Property:** The `.length` property is used to find out how many characters are in a string. For example, if `password = "secure123"`, then `password.length` would return `9`. This is important for checking if a password meets a minimum length requirement.

- **Checking for Special Characters:** The `includes()` method checks if a string contains a specific sequence of characters. Here, we’re using it to see if the password contains common special characters like `@`, `#`, or `$`.

- **Combined Checks:** The program checks both the length and the presence of special characters to determine the password's strength. If both conditions are met, the password is considered strong.

## Important Notes

- **Security Reminder:** This simple checker just gives a basic idea of password strength. For real-world applications, more complex checks and security measures (like hashing) should be used.
- **Customizing Checks:** You can easily customize this program to check for different special characters or a different minimum length by modifying the conditions.
- **User Feedback:** Providing clear feedback, like suggesting users make their passwords longer or include special characters, helps improve the user experience.

By mastering these basic checks, you’re well on your way to understanding how to build more secure systems and handle user input effectively.