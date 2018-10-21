'use strict';
const score = document.querySelector('.score');

const Metrics = (function() {
  let points = 0;

  function addPoints() {
    console.log('add points');
    points += 10;
    score.textContent = `Score: ${points}`;
  }

  function resetPoints() {
    console.log('reset points');
    points = 0;
    score.textContent = `Score: ${points}`;
  }

  return {
    addPoints: addPoints,
    resetPoints
  }
})();
