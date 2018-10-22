'use strict';
const score = document.querySelector('.score');
const endScore = document.querySelector('.endScore');

const Metrics = (function() {
  let points = 0;

  function currentScore() {
    endScore.textContent = `Score: ${points}`;
  }

  function add() {
    console.log('add points');
    points += 10;
    score.textContent = `Score: ${points}`;
  }

  function reset() {
    console.log('reset points');
    points = 0;
    score.textContent = `Score: ${points}`;
  }

  function addPoints() {
    add();
  }

  function resetPoints() {
    reset();
  }

  function showScore() {
    currentScore();
  }

  return {
    showScore: showScore,
    addPoints: addPoints,
    resetPoints: resetPoints
  }
})();
