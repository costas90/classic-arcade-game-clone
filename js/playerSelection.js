// IIFE
const Game = (function(global){
  'use strict;'
  const document = global.document;
  const container = document.querySelector('.container');
  let playerSelection = '';

  // Listen for character click
  container.addEventListener('click', function(event) {
    const charSelected = document.querySelector('.charSelected');

    // Add .charSelected class to character clicked
    if (event.target.classList.contains('playerChar')) {
      // Remove charSelected if another
      // characted is clicked
      if (charSelected !== null) {
        charSelected.classList.remove('charSelected');
      }
      event.target.classList.add('charSelected');
    }
  })

  // Show a warning message if no character is charSelected
  function warning() {
    const warning = document.createElement('h4');
    const playerSelection = document.querySelector('.playerSelection');
    warning.textContent = 'Please select a character first!';
    warning.style.color = 'red';
    playerSelection.insertAdjacentElement('afterEnd', warning);
  }

  // start game
  function start() {
    // If no character is selected show
    // a warning, else start the game
    const charSelected = document.querySelector('.charSelected');
    if (charSelected === null) {
      warning();
    } else {
      container.classList.add('hidden');
      player.sprite = charSelected.getAttribute('src');
    }
  }

  // Return the start
  // function in an object
  return {
    start: start
  }

})(this);
