### Topic: Discount Calculator Challenge

Ready to put your problem-solving skills to the test? Today’s challenge involves building a Discount Calculator. You’ll ask the user for the original price of an item and their membership status, then apply the appropriate discount. Let’s see how well you can crack this one!

## Scenario

You’re creating a discount calculator for a store. The user will input the original price of an item and their membership status. Depending on their membership level, they’ll receive a different discount:

- **Regular members** get a 10% discount.
- **Gold members** get a 20% discount.
- **Platinum members** get a 30% discount.

The program should output the final price after applying the discount.

### Example Inputs and Outputs:

- **Input:** Original Price: 100, Membership: Regular
- **Output:** Final Price: 90

- **Input:** Original Price: 200, Membership: Gold
- **Output:** Final Price: 160

## Hints

- Start by prompting the user to input the original price and their membership status.
- Use `if-else` statements to check the membership status and apply the correct discount.
- Remember to calculate the discount by multiplying the original price by the discount percentage.
- Subtract the discount from the original price to get the final price.
- Output the final price to the user.

### 🧠 Mindset Quotes
A little reminder: persistence is key to mastering problem-solving. Keep this quote in mind as you work through the challenge. 💪😄

“It's not that I'm so smart, it's just that I stay with problems longer.” — Albert Einstein 

## Pseudocode Solution

<details>
<summary>Pseudocode</summary>

```
1. Prompt the user to enter the original price of the item.
2. Prompt the user to enter their membership status (regular, gold, platinum).

3. If membership status is "regular":
    - Set discount to 10% of the original price.
    - Calculate final price as original price minus discount.

4. Else if membership status is "gold":
    - Set discount to 20% of the original price.
    - Calculate final price as original price minus discount.

5. Else if membership status is "platinum":
    - Set discount to 30% of the original price.
    - Calculate final price as original price minus discount.

6. Output the final price to the user.
```

</details>

### Note
- Pseudocode is a simplified version of your code written in plain English, helping you plan out the logic and steps before you dive into actual coding. 
- It clarifies your thought process, reduces errors, and makes complex problems easier to tackle by breaking them down into manageable steps. 
- Essentially, it’s like mapping out a recipe before you start cooking.

This challenge is a great way to test your understanding of conditionals and calculations. Remember, the key to solving problems is to break them down into smaller steps and tackle each one with focus and persistence. Happy coding!