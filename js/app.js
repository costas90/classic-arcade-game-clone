'use strict';

// Enemies our player must avoid
var Enemy = function() {
  this.sprite = 'images/enemy-bug.png';
  this.x = 0;
  // set Y position on length start
  this.y = this.generatePosY();
  // set speed variable
  this.speed = this.generateSpeed();
  this.width = 101;
};

// Update the enemy's position & speed
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x > 505) {
    this.resetPos();
  }
  if(this.y === player.y && player.x < this.x + this.width && player.x + player.width > this.x) {
    player.resetPos();
    Metrics.resetPoints();
  }
};

// Reset the enemy's position and speed randomly
Enemy.prototype.resetPos = function(dt) {
  this.x = 0;
  this.y = this.generatePosY();
  this.speed = this.generateSpeed();
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset the enemy's Y position randomly
Enemy.prototype.generatePosY = function() {
  // Pick random value from yArr array
  const yArr = [72, 155, 238];
  const y = Math.floor(Math.random() * yArr.length);
  return yArr[y];
}

// Reset the enemy's speed randomly
Enemy.prototype.generateSpeed = function() {
  // Pick random value from speedArr array
  const speedArr = [101, 155, 202];
  const x = Math.floor(Math.random() * speedArr.length);
  return speedArr[x];
}


// Our player class
const Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 404;
  this.width = 101;
}

// Update the player's position
Player.prototype.update = function(dt) {
  // if the player reaches the water,
  // reset its position
  if (this.y === -11) {
    this.resetPos();
    Metrics.addPoints();
  }
}

// Render the player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Reset the player's position
Player.prototype.resetPos = function() {
  this.x = 202;
  this.y = 404;
  console.log('Reset Player Position')
}

// Set the movement direction and distance of the player
// based on the key clicked
Player.prototype.handleInput = function(allowedKeys) {
  switch (allowedKeys) {
    case 'left':
    this.x -= this.x > 0 ? 101 : 0;
    break;
    case 'right':
    this.x += this.x < 404 ? 101 : 0;
    break;
    case 'up':
    this.y -= this.y > -11 ? 83 : 0;
    break;
    case 'down':
    this.y += this.y < 404 ? 83 : 0;
  }
  console.log(`Player: ${this.x}, ${this.y}`);
}

// Place all enemy objects in an array called allEnemies
const allEnemies = [new Enemy(), new Enemy(), new Enemy()];

// Place the player object in a variable called player
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
