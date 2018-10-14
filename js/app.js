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

Enemy.prototype.generatePosY = function() {
  // Pick random value from yArr array
  const yArr = [72, 155, 238];
  const y = Math.floor(Math.random() * yArr.length);
  return yArr[y];
}

Enemy.prototype.generateSpeed = function() {
  // Pick random value from speedArr array
  const speedArr = [101, 155, 202];
  const x = Math.floor(Math.random() * speedArr.length);
  return speedArr[x];
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 404;
  this.width = 101;
}

Player.prototype.update = function(dt) {

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.resetPos = function() {
  this.x = 202;
  this.y = 404;
  console.log('Reset Player Position')
}

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

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const allEnemies = [new Enemy(), new Enemy(), new Enemy()];

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
