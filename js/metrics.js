'use strict';
const score = document.querySelector('.score');

const Metrics = (function() {
  let points = 0;

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

  return {
    addPoints: addPoints,
    resetPoints: resetPoints
  }
})();
