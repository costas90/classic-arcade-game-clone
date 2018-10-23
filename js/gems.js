'use srict';
// Gems contains a factory function and returns allGems
const Gems = (function() {

  // Prototype function setting the gem
  // color, position X and Y, along with
  // render, update, and reset methods
  function gem(color) {

    // Pick the right image path based on the gem color
    const genImage = function() {
      switch(color) {
        case 'blue':
          return 'images/Gem Blue.png';
          break;
        case 'green':
          return 'images/Gem Green.png';
          break;
        case 'orange':
          return 'images/Gem Orange.png';
      }
    };

    // Generate position Y at random
    const generatePosY = function() {
      // Pick random value from yArr array
      const yArr = [72, 155, 238];
      const y = Math.floor(Math.random() * yArr.length);
      return yArr[y];
    }

    // Generate position X at random
    const generatePosX = function() {
      // Pick random value from xArr array
      const xArr = [0, 101, 202, 303, 404];
      const x = Math.floor(Math.random() * xArr.length);
      return xArr[x];
    }

    // Return the color, image, x & y position,
    // and render & update methods
    return {
      color: color,
      image: genImage(),
      y: generatePosY(),
      x: generatePosX(),
      // Draw the gem on canvas
      render: function() {
        ctx.drawImage(Resources.get(this.image), this.x, this.y, 101, 130);
      },
      // Update the gem's position
      // and player score
      update: function() {
        if(this.y === player.y && this.x === player.x) {
          this.y = generatePosY();
          this.x = generatePosX();
          Metrics.addPoints();
        }
      },
      reset: function() {
        this.y = generatePosY();
        this.x = generatePosX();
      }
    }
  }

  // Factory function for gem
  function FactoryGem(color) {
    return Object.create(gem(color));
  }

  // Create 3 gems with 3 colors
  const blueGem = FactoryGem('blue');
  const greenGem = FactoryGem('green');
  const orangeGem = FactoryGem('orange');

  // Add all 3 gems in an array
  const allGems = [blueGem, greenGem, orangeGem];

  // Return the allGems array to be used globally
  return {
    allGems: allGems
  }

})();
