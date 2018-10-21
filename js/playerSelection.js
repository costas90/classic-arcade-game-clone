// IIFE
const Game = (function(global){
  'use strict';
  const document = global.document;
  const container = document.querySelector('.container');
  const metrics = document.querySelector('.metrics');

  // Listen for character click
  container.addEventListener('click', function(event) {
    const charSelected = document.querySelector('.charSelected');

    // Add .charSelected class to character clicked
    if (event.target.classList.contains('playerChar')) {
      // Remove charSelected if another
      // characted is clicked, else add it
      if (charSelected !== null) {
        charSelected.classList.remove('charSelected');
      }
      event.target.classList.add('charSelected');
    }
  })

  // Show a warning message if no character is charSelected
  function warning() {
    const warning = document.createElement('h4');
    const container1 = document.querySelector('.container1');
    warning.textContent = 'Please select a character first!';
    warning.style.color = 'red';
    container1.insertAdjacentElement('afterEnd', warning);
  }

  // Hide player selection modal, reveal metrics, and
  // save the selected char image
  function hidePlayerSelection(metrics, charSelected) {
    container.classList.add('hidden');
    metrics.classList.remove('hidden');
    player.sprite = charSelected.getAttribute('src');
  }

  // start game
  function start() {
    const charSelected = document.querySelector('.charSelected');
    // If no character is selected show
    // a warning, else start the game
    if (charSelected === null) {
      warning();
    } else {
      hidePlayerSelection(metrics, charSelected);
    }
  }

  // Return the start
  // function in an object
  return {
    start: start
  }

})(this);
