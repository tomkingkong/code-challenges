/* Robot Traversal 

1. Does the robot return to where it started?
    - Direction it faces doesn't matter
2. Return either true or false

Roboto given a set of instructions:
    G - move forward
    L - pivot 90* left (counterclockwise)
    R - pivot 90* right (clockwise)
*/

const returnToOrigin = (s) => {
  const origin = { x:0, y:0 };
  const path = [...s.split('')];
  let currentPos = { x:0, y:0 }
  let heading = 0;

  const moveForward = () => {
    if (heading === 0) return currentPos.y += 1;
    if (heading === 90) return currentPos.x += 1;
    if (heading === 180) return  currentPos.y -= 1;
    if (heading === 270) return currentPos.x -= 1;
  }

  const turnRight = () => {
    if(heading === 0) return heading = 90;
    if(heading === 90) return heading = 180;
    if(heading === 180) return heading = 270;
    if(heading === 270) return heading = 0;
  }

  const turnLeft = () => {
    if(heading === 0) return heading = 270;
    if(heading === 270) return heading = 180;
    if(heading === 180) return heading = 90;
    if(heading === 90) return heading = 0;
  }
  
  const mover = {
    'G': moveForward(),
    'L': turnLeft(),
    'R': turnRight()
  }

  path.forEach(m => {
    mover[m];
    // if(m === 'G') moveForward();
    // if(m === 'R') turnRight();
    // if(m === 'L') turnLeft();
  })

  let end = origin.x === currentPos.x && origin.y === currentPos.y;
  console.log(end)
  return end;
}


returnToOrigin('GRGRGRG');
returnToOrigin('GRGRLL');

// const returnToOrigin = (string) => {
//   const origin = { x:0, y:0 };
//   const path = [...string.split('')];
//   let currPos = { x:0, y:0 }
//   let heading = 0;

//   const moveForward = () => {
//     if (heading === 0) return currPos.y += 1;
//     if (heading === 90) return currPos.x += 1;
//     if (heading === 180) return  currPos.y -= 1;
//     if (heading === 270) return currPos.x -= 1;
//   }

//   const turnRight = () => ( heading = (heading + 90) % 360 );
//   const turnLeft = () => ( heading = ((heading - 90) + 360) % 360 );
  
//   path.forEach(m => {
//     if(m === 'G') moveForward();
//     if(m === 'R') turnRight();
//     if(m === 'L') turnLeft();
//   });

//   let end = origin.x === currPos.x && origin.y === currPos.y;
//   console.log(end)
//   return end;
// }