# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](../article-preview-component-master/preview/desktop.png)


![](../article-preview-component-master/preview/desktop-active.png)


![](../article-preview-component-master/preview/mobile.png.png)


![](../article-preview-component-master/preview/mobile-active.png)

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

I got some more practice with media queries and flexbox and I also learned about keyframes to animate the popup

Some code I'm proud of

```css
.share .links {
    display: none;
    position: absolute;
    justify-content: space-evenly;
    background-color: var(--Very-Dark-Grayish-Blue);
    width: 300px;
    padding: 10px;
    align-items: center;
    bottom: 115%;
    right: -225%;
    border-radius: 10px;
    z-index: 1;
}

.share .links.show {
    display: flex;
}

.share .links::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: 5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

```
```js
const shareButton = document.getElementById('share-btn');
const links = document.getElementById('links');

shareButton.addEventListener("click", () => {
    if (links.classList.contains("show")) {
        links.classList.remove("show");
        links.style.animation = "fadeOut 0.5s";
        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        setTimeout(() => {
            links.style.display = "none";
        }, 500)
    } else {
        links.classList.add("show");
        links.style.animation = "fadeIn 0.5s";
        links.style.display = "flex";
        shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
    }
});
```

### Continued development

I want to focue more on my Javascript and css. I also plan to learn react and a css framework soon

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Name- [Induwara Thisarindu]"# Article-preview-component" 
