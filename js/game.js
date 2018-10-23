'use strict';
const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');
const endContainer = document.querySelector('.endContainer');
const metrics = document.querySelector('.metrics');
const h4 = document.createElement('h4');

// IIFE
const Game = (function(){

  // Callback function that handles character selection.
  function selection(event) {
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
  }

  // Listen for character click
  container.addEventListener('click', selection)

  // Show a warning message if no character is Selected
  function warning(h4) {
    h4.textContent = 'Please select a character first!';
    h4.style.color = 'red';
    container1.insertAdjacentElement('afterEnd', h4);
  }

  // Hide player selection modal, reveal metrics, and
  // save the selected char image
  function hidePlayerSelection(metrics, charSelected) {
    container.classList.add('hidden');
    metrics.classList.remove('hidden');
    player.sprite = charSelected.getAttribute('src');
  }

  // Hide end screen
  function hideEndScreen() {
    endContainer.classList.add('hidden');
    container.classList.remove('hidden');
  }

  // Privately hide end screen
  function _hideEndScreen() {
    hideEndScreen();
  }

  // Start game
  function start() {
    const charSelected = document.querySelector('.charSelected');
    // If no character is selected show
    // a warning, else start the game
    if (charSelected === null) {
      warning(h4);
    } else {
      hidePlayerSelection(metrics, charSelected);
    }
  }

  // Privately start game
  function _start() {
    start();
  }

  // End game and show final score
  function end() {
    endContainer.classList.remove('hidden');
    metrics.classList.add('hidden');
    Metrics.showScore();
  }

  // Privately hide end game
  function _end() {
    end();
  }

  // Return the start
  // function in an object
  return {
    start: _start,
    end: _end,
    hideEndScreen: _hideEndScreen
  }

})();
