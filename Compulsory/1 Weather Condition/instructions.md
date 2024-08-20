### Guided Lesson: Weather Condition

In this lesson, you’ll create a simple program that gives suggestions based on the current weather condition. You’ll practice using `if`, `else if`, and `else` statements, and you’ll get user input using `prompt()`. This exercise will help you understand how to use conditionals to make decisions in your code.

#### Scenario:
You want to decide what to do based on the weather condition. The program will ask the user for the weather condition and provide suggestions like whether to bring an umbrella, wear sunscreen, or stay inside.

## Steps

### 1. Start by Asking for the Weather Condition

We’ll use `prompt()` to ask the user to describe the weather condition. The user can input options like "sunny", "rainy", or "snowy".

```javascript
const weather = prompt("What is the weather like today? (sunny, rainy, snowy)");
```

### 2. Use an If Statement for the First Condition

Let’s start by checking if the weather is 'sunny'. If it is, we’ll suggest that the user wear sunscreen.

```javascript
if (weather == 'sunny') {
    console.log("It's sunny outside!☀️ Don't forget to wear sunscreen.");
}
```

### 3. Add an Else-If Statement for a Second Condition

Next, let’s check if the weather is 'rainy'. If it is, we’ll suggest that the user take an umbrella.

```javascript
else if (weather == 'rainy') {
    console.log("It's rainy outside!🌧️ You should bring an umbrella.");
}
```

### 4. Add Another Else-If Statement for a Third Condition

Now, let’s check if the weather is 'snowy'. If it is, we’ll suggest that the user stay inside and keep warm.

```javascript
else if (weather == 'snowy') {
    console.log("It's snowy outside!🥶 It might be a good idea to stay inside and keep warm.");
}
```

### 5. Use an Else Statement for Any Other Condition

Finally, let’s add a general response if the user inputs anything else. For example, they might type something unexpected like "windy" or "foggy". In this case, we’ll print a message saying we’re not sure what to suggest.

```javascript
else {
    console.log("Well, good luck, just be prepared for anything!😵");
}
```

### 6. Run Your Code

Run the code and try entering different weather conditions like "sunny", "rainy", "snowy", or anything else. See how the output changes based on what you type.

### Full Code

Here’s the full code for this exercise:

```javascript
const weather = prompt("What is the weather like today? (sunny, rainy, snowy)");

if (weather == 'sunny') {
    console.log("It's sunny outside!☀️ Don't forget to wear sunscreen.");
} else if (weather == 'rainy') {
    console.log("It's rainy outside!🌧️ You should bring an umbrella.");
} else if (weather == 'snowy') {
    console.log("It's snowy outside!🥶 It might be a good idea to stay inside and keep warm.");
} else {
    console.log("Well, good luck, just be prepared for anything!😵");
}
```

### Challenge: Adding More Weather Conditions

Try expanding the program by adding more weather conditions and suggestions! For example:
- If it’s 'windy', you might suggest wearing a windbreaker.
- If it’s 'foggy', you might suggest driving carefully.

Add these conditions using `else if` statements, just like we did above.