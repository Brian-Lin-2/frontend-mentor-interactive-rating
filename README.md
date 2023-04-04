# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

Basic rating system which allows the user to select and submit a rating of their choice.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Rating Component:
</br><img width="499" alt="image" src="https://user-images.githubusercontent.com/19761406/229794086-50fc6590-366a-4bd7-8d90-066daaf9ca3d.png">

Selected Rating:
</br><img width="527" alt="image" src="https://user-images.githubusercontent.com/19761406/229794177-d33ca472-903a-4779-9e9b-c4d9ec2c54ab.png">

Hovered Rating:
</br><img width="507" alt="image" src="https://user-images.githubusercontent.com/19761406/229794240-1c0c0172-778c-4216-963d-be330ecb36ca.png">

Hovered Button:
</br><img width="519" alt="image" src="https://user-images.githubusercontent.com/19761406/229794350-0bae96e9-b62c-4ee3-b2cb-c27a036d1f84.png">

Thank You Component:
</br><img width="480" alt="image" src="https://user-images.githubusercontent.com/19761406/229794405-4aded1ed-a671-4f47-9df0-bce12a0658c2.png">

### Links

- Solution URL: https://github.com
- Live Site URL: https://frontend-mentor-interactive-rating-bzfenevzt-brian-lin-2.vercel.app

## My process

Started off with basic HTML formatting before transitioning into a basic flexbox layout. Then, I added the css styling for the rating component before styling the thank you component. Finally, I added the JS and active states.

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

I learned that on mobile devices, the 'hover' property for elements doesn't really work. Therefore, it's best to avoid hover elements for mobile devices.

```css
@media screen and (min-width: 500px) {
    .number:hover {
        cursor: pointer;
        background-color: hsl(25, 97%, 53%);
        color: hsla(0, 0%, 100%, 85%);
    }
    
    .button:hover {
        cursor: pointer;
        background-color: hsla(0, 0%, 100%, 85%);
        color:hsl(25, 97%, 53%)
    }
}
```

I learned more about gradients in css and how to create directional ones.

```css
.rating__container {
  background: linear-gradient(to bottom right, hsl(213, 19%, 18%), 25%, hsla(213, 19%, 18%, 50%));
}
```

### Continued development

Moving forward, I would like to practice with more complex JavaScript and it's interactions with mobile devices.

## Author

- Frontend Mentor - [@Brian-Lin-2](https://www.frontendmentor.io/profile/Brian-Lin-2)
