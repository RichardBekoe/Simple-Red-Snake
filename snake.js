// ! canvas code

const canvas = document.querySelector(".canvas");

const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snake;

(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector('.score')
      .innerText = snake.total;

  }, 250);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));


// ! fruit code
function Fruit() {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }

  this.draw = function() {
    ctx.fillStyle = "#4cafab";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}



// ! Main snake
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  // increasing the length of the snake

  this.draw = function() {
    ctx.fillStyle = "#FF2D00";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  // moving snake

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // snake moves to the other side of the canvas when touching the edge
    // snake hitting boundary, game end mechanism yet to be implemented

    // if snake moves to the right boundary shifted to the left

    if (this.x > canvas.width) {
      this.x = 0;
    }

    // if snake moves to the bottom  boundary shifted to the top

    if (this.y > canvas.height) {
      this.y = 0;
    }

    // if snake moves to the left boundary shifted to the right

    if (this.x < 0) {
      this.x = canvas.width;
    }

    // if snake moves to the top  boundary shifted to the bottom

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  this.changeDirection = function(direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }


  // eat fruit and increase the length of the snake
  this.eat = function(fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      return true;
    }

    return false;
  }

  // detect collision with own part of snake length

  this.checkCollision = function() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
      }
    }
  }
}