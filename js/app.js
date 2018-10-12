// Enemies our player must avoid
var Enemy = function() {

    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    // Return y coordinate
    this.y = (function() {
      // Pick random value from yArr array
      const yArr = [83-20, 166-20, 249-20];
      const y = Math.floor(Math.random() * yArr.length);
      return yArr[y];
    })();

    // Return speed
    this.speed = (function() {
      // Pick random value from speedArr array
      const speedArr = [101, 155, 202];
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
    this.x += this.speed * dt;
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

}

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
  console.log(this.x, this.y);
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
