# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./assets/images/screenshot.png.jpg)

### Links

- Live Site URL: (https://interactive-card-ooreoluwas-projects-11b0b542.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript (for form validation and interactivity)

### What I learned

Working on this project helped me practice:

- **Form validation in JavaScript** with real-time error feedback.
- Using **flexbox and media queries** for responsive layouts.
- Updating card details dynamically on the UI as the user types.
- Managing **success states** and form reset logic.

```js
// Example: JS snippet for formatting card number
cardNumberInput.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});
