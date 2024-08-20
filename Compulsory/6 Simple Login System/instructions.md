### Topic: Simple Login System

Ever wondered how your password login systems on your phone and computers work? Well, it's like setting up a secure door that only opens for the right person with the correct password. 

In this lesson, you’ll build a simple login system that checks if a username and password match stored values. Let’s make sure only the right user can get through!


## Steps

### 1. Store the Username and Password

First, define the correct username and password that the system will check against. These will be stored in variables.

```javascript
const correctUsername = "user123";
const correctPassword = "abc456";
```

### 2. Ask for the User's Input

Next, use `prompt()` to ask the user to input their username and password.

```javascript
const username = prompt("Enter your username:");
const password = prompt("Enter your password:");
```

### 3. Use If Statements to Check the Username and Password

Now, check if both the username and password match the stored values. If they do, print a welcome message.

```javascript
if (username == correctUsername && password == correctPassword) {
    console.log("Login successful! Welcome back.");
}
```

### 4. Add an Else Statement for Incorrect Login

If either the username or password is incorrect, print an error message.

```javascript
else {
    console.log("Login failed. Incorrect username or password.");
}
```

### Full Code

<details>
<summary>Full Code</summary>

```javascript
const correctUsername = "user123";
const correctPassword = "abc456";

const username = prompt("Enter your username:");
const password = prompt("Enter your password:");

if (username == correctUsername && password == correctPassword) {
    console.log("Login successful! Welcome back.");
} else {
    console.log("Login failed. Incorrect username or password.");
}
```

</details>

## Explanation

- **Stored Values:** The correct username and password are stored in variables. The program checks the user’s input against these values.
- **Conditional Check:** The `if` statement checks if both the username and password match the stored values. If they do, the user is granted access.
- **Error Handling:** If either the username or password is incorrect, the `else` statement triggers, notifying the user of a failed login attempt.

## Important Notes

- **Case Sensitivity:** This example assumes case-sensitive inputs. If you want to ignore case, you can use methods like `toLowerCase()` or `toUpperCase()`.
- **Security:** In a real-world scenario, passwords should never be stored as plain text. Use hashing and other security measures to protect user data.

This simple login system is a great starting point for understanding how user authentication works. It’s a fundamental concept that powers many real-world applications.