# Simple Red Snake Game - Project 1

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


## Approach
For the first General Assemmly Softare Engineering project I decided to implement the creation of the original game of Snake, while integrating my own features and style when possible.
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

Link - [Referenced Code](https://github.com/RichardBekoe/Simple-Red-Snake/blob/master/snake.js)

## Key Learnings

The skills involved included breaking the project down into different components(data, presentation, views, style, DOM manipulation) and brainstorming each component individually. I actively practiced the use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems.

## Conclusions

I believe that I delivered a product of value to the end user. The functional game entertains a modest, simple design, allows a user to keep score and provides a straightforward goal for a user to strive towards achievement of a high score - overall establishing an attractive, fun product experience.
