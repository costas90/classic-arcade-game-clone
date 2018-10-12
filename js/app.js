// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    // Return y coordinate
    this.y = (function() {
      // Pick random value from yArr array
      const yArr = [83, 166, 249];
      const y = Math.floor(Math.random() * yArr.length);
      return yArr[y];
    })();

    // Return speed
    this.speed = (function() {
      // Pick random value from speedArr array
      const speedArr = [1, 2, 3];
      const x = Math.floor(Math.random() * speedArr.length);
      return speedArr[x];
    })();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += 101 * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 404;
}

Player.prototype.update = function(dt) {
  this.x * dt;
}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function() {

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const bug1 = new Enemy();
const bug2 = new Enemy();
const bug3 = new Enemy();

const allEnemies = [bug1, bug2, bug3];

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
