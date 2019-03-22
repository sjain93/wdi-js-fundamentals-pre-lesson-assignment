// const ghosts = {inky:'Cyan', blinky:'Red', pinky:'Pink', clyde: 'Orange'};
// console.log(ghosts);
//
// console.log(ghosts.inky);
// console.log(ghosts.blinky);
//
// console.log(ghosts['inky']);
// console.log(ghosts['blinky']);
//
// const ghostName = 'clyde';
// console.log(ghosts[ghostName]);
//
// const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
//
// for (let index = 0; index < ghosts.length; index++) {
//   console.log('Pac-Man eats '+ ghosts[index]);
// }
//

// console.log('Pac-man returns home after a long day in the maze.');

// function eatDot () {
//   console.log('Munch!');
// }
//
// eatDot();
//
// const highScores = [];
// function addHighScore(highScoreList, playerInitials, score ) {
//   const record = { player: playerInitials, score: score};
//   highScoreList.push(record);
// }

function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}

let score = 0; // try this with const - it won't work!

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
