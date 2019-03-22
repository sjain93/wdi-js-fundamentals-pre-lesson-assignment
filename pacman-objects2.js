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
powerPelletEaten = false;
let ghosts = 4;

while (true) {
  console.log('Ghosts remaing: '+ ghosts);

    if (powerPelletEaten == false) {
      console.log('Pac-man eats the power pellet');
      powerPelletEaten = true;
    }
    else if (ghosts>0) {
      console.log('Pac-man eats a ghost');
      ghosts--;
    }
    else {
      break;
    }
  }

console.log('Pac-man returns home after a long day in the maze.');
