# Simple Red Snake Game - Project 1

![Snake Game](./snake-screenshot.png)

## Contents

- [Contents](#contents)
- [Brief](#brief)
- [Approach](#approach)
- [Technologies Used](#technologies-used)
- [Code Review](code-review)
  - [HTML](#html)
  - [CSS](#css)
  - [JAVASCRIPT](#javascript)
- [Key Learnings](#key-learnings)
- [Conclusions](#conclusions)

## Brief
You have the chance to create a game, working through some tough programming challenges. You will be working individually on this project. Your application must render a game in the browser and design logic for game progression. Include separate HTML, CSS, JavaScript files and use Javascript for DOM manipulation (use semantic markup for HTML and CSS). The game project should also be deployed online.


## Approach
For the first General Assemmly Softare Engineering project I decided to implement the creation of the original game of Snake, while integrating my own features and style when possible. Snake is a single-player game where the player earns points by guiding the snake to eat food randomly placed on the game board.
During the project I consulted documentation and researched the appropriate resources when required. I also received project feedback which I reflected and acted upon during and after the project to improve my skills further.

## Technologies Used
- HTML
- CSSS
- JAVASCRIPT

## Code Review

### HTML

The HTML code used is straightforward: The title is set and the canvas height, width and background colour is configured.
``` javascript
<!DOCTYPE html>
<html>
<head>
    <title>Snake</title>
</head>
<body>
    <h1 class="main">Simple Red Snake 🐍</h1>
    <canvas class="canvas" height="380" width="380" style="background-color: #205279">
  </canvas>
    <h1 class="score"></h1>
</body>
<link rel="stylesheet" href="./main.css">
<script type="text/javascript" src="snake.js"></script>
</html>
```

### CSS

The CSS code involved the positioning and styling main game board.

``` javascript
* {
    box-sizing: border-box;
}
body {
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0
}
.main {
    color: #FF2D00;
}
```

### JAVASCRIPT
- JavaScript Game Logic involved:
  - The snake should be able to move in four different directions
  - The snake should be able to eat 'food' blocks to grow bigger
  - The food should appear in random positions each time it is eaten (removed from the game board)
  - The detection of a collision with the snake's own body (own part of the snake length) ends and restarts the game score

Link - [Referenced Code](https://github.com/RichardBekoe/Simple-Red-Snake/blob/master/snake.js)

## Key Learnings

The skills involved included breaking the project down into different components(data, presentation, views, style, DOM manipulation) and brainstorming each component individually. I actively practiced the use Web Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems. In order to implement the game logic it was important to understand all of the rules of the game. The task also helped me practice the skill of planning a project, including develivering an MVP product, before further developing extra features.

## Conclusions

I believe that I delivered a product of value to the end user. The functional game entertains a modest, simple design, allows a user to keep score and provides a straightforward goal for a user to strive towards achievement of a high score - overall establishing an attractive, fun product experience.
