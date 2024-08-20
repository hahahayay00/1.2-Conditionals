### Topic: Improved Login System Challenge

Let's take your login system skills to the next level! In this challenge, you’ll build a more robust login system that not only checks if the username and password match, but also handles different scenarios like incorrect passwords or non-existent users. Are you ready to make sure only the right people can log in? 🔐

## Scenario

You’re developing an improved login system that validates a user’s login credentials. The program will ask the user to input their username and password, then check the following:

1. **User Not Found:** If the username doesn’t match any stored usernames, the program should notify the user that they are not found.
2. **Password Incorrect:** If the username is found but the password doesn’t match, the program should inform the user that the password is incorrect.
3. **Login Successful:** If both the username and password match, the program should log the user in with a success message.

### Example Inputs and Outputs:

```js
// == Example 1 ==
// Input: Username: 'user123', Password: 'wrongpass'
// Output: "Incorrect password. Please try again."

// == Example 2 ==
// Input: Username: 'unknownUser', Password: 'pass456'
// Output: "User not found. Please sign up."

// == Example 3 ==
// Input: Username: 'user123', Password: 'pass456'
// Output: "Login successful! Welcome back."
```

## Hints

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Show Hint 1</summary>
Start by storing the correct username and password in variables.
</details>

<br>

<details>
<summary>Show Hint 2</summary>
Use `if-else` statements to check:

- First, if the username matches the stored value.
- Then, if the password matches the stored value.
</details>

<br>

<details>
<summary>Show Hint 3</summary>
Consider using an `else if` statement to handle the scenario where the username is correct but the password is not.
</details>

## Pseudocode Solution

<details>
<summary>Pseudocode</summary>

```
1. Store the correct username and password in variables.

2. Prompt the user to enter their username.
3. Prompt the user to enter their password.

4. If the username does not match the stored username:
    - Output "User not found. Please sign up."

5. Else if the username matches but the password does not:
    - Output "Incorrect password. Please try again."

6. Else if both the username and password match:
    - Output "Login successful! Welcome back."
```

</details>

Remember, each scenario needs to be handled carefully to ensure that the user gets the correct feedback based on their input. Stay focused, and you’ll nail it!