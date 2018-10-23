'use strict';
const score = document.querySelector('.score');
const endScore = document.querySelector('.endScore');

const Metrics = (function() {
  let points = 0;

  // Add 10 points
  function add() {
    points += 10;
    score.textContent = `Score: ${points}`;
  }

  // Add points privately
  function _add() {
    add();
  }

  // Reset points
  function reset() {
    points = 0;
    score.textContent = `Score: ${points}`;
  }

  // Reset points privately
  function _reset() {
    reset();
  }

  // Show final score
  function showScore() {
    endScore.textContent = `Score: ${points}`;
  }

  // Privately show final score
  function _showScore() {
    showScore();
  }

  // Make _add, _Reset,
  // _showScore public
  return {
    addPoints: _add,
    resetPoints: _reset,
    showScore: _showScore
  }
})();
