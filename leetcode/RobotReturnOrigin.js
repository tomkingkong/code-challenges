// https://leetcode.com/problems/robot-return-to-origin/description/

var judgeCircle = function(moves) {
  const origin = { x:0, y:0 };
  
  for (let i=0; i<moves.length; i++) {
      switch(moves[i]) {
          case 'U':
              origin.y++
              break;
          case 'D':
              origin.y--
              break;
          case 'L':
              origin.x--
              break;
          case 'R':
              origin.x++
              break;
          default:
              break;
      }
  }
  
  return origin.x === 0 && origin.y === 0;
};