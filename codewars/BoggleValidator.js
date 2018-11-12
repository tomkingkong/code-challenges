// https://www.codewars.com/kata/57680d0128ed87c94f000bfd

const mapBoard = (board, guess) => {
	let b = board.map((a,i) => {
		return a.map((l,j) => {
			return [`${i}${j}`, l]
		})
  });

	let g = guess.split('');
  let start = g[0];

  let entries = [].concat(...b);
  let startingPoints = entries.filter(entry => entry[1] === start);

  if(!startingPoints.length) return false;

  const doesComboExist = startingPoints.some( p => {
    g = g.slice(1);
    return findPoints(g, p, [p[0]]);
  });

  function findPoints(letters, point, history) {
    if (!letters.length) return true;
 
    let currPoint = point[0].split('');
    let currRow = parseInt(currPoint[0]);
    let currCol = parseInt(currPoint[1]);
 
    const nextPoints = entries.filter(entry => {
      let coordinates = entry[0].split('');
      let row = parseInt(coordinates[0]);
      let col = parseInt(coordinates[1]);

      if(!history.includes(entry[1])) {
        if(entry[1] === letters[0]) {
          if(row === currRow || row+1 === currRow || row-1 === currRow) {
            if(col === currCol || col+1 === currCol || col-1 === currCol) {
              return true;
            } else {
              return false;
            }
          }
        }
      }    
    });

    let shouldExit = !nextPoints.some(p => history.includes(p[0]));
    if(!shouldExit) return false;

    if (letters.length && !nextPoints.length) return false;
    
    letters.shift();

    if(!letters.length) return true;

    return nextPoints.some(p => {
      let h = [...history, p[0]];
      return findPoints(letters, p, h);
    });
  }

  return doesComboExist;
}

var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

mapBoard(testBoard, 'EARS')