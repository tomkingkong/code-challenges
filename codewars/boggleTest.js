const eightBoard = [
  ["E","A","R","A","X","R","A","H"],
  ["N","L","E","C","A","R","E","A"],
  ["I","A","I","S","B","R","A","F"],
  ["B","Y","O","R","A","T","C","A"],
	["E","A","R","A","G","R","A","B"],
  ["N","L","E","C","A","Z","D","X"],
  ["I","A","I","S","M","P","W","V"],
  ["B","Y","O","R","A","R","T","O"]
];

// const fourBoard = [
//   ["E","A","R","G"],
//   ["N","N","E","C"],
//   ["I","O","N","S"],
//   ["B","O","O","G"]
// ];

//	search through every possible path within the BOARD
//	return true if at least one pattern is able to make it to the last letter of the GUESS
//	else return false
/*
Possible Trees:
												 ROOT
					 /			 		/						\					\
				E(0,0)	 	 A(0,1) 			 R(0,2)    G(0,3)
					|		/ \		 |						 |				 |
				N(1,0)		 N(1,1)				 E(1,2)		 C(1,3)
					|					 |						 |				 |
				I(2,0)		 O(2,1)				 N(2,2)		 S(2,3)
					|					 |						 |				 |
				B(3,0)		 O(3,1)				 O(3,2)		 G(3,3)
	
OOOOORRRR

every letter is a key with an array of coordinates:
guess = [ B, O, N, G ]
BOGGLE = {
	E: {0:0, 1:2}
	A: {0:1}
	R: {0:2}
	G: {0:3, 3:3}
	N: {1:0, 1:1, 2:2}
	C: {1:3}
	I: {2:0}
	O: {2:1, 3:1, 3:2}
	S: {2:3}
	B: {3:0}
}

BOGGLE[guess[0]]

// Add an extra parameter to each letter (column number) to match against

*/

// pass board in to mapBoard, create map of boggle board
// keys are coordinates, values are letters
// iterate over GUESS, and remove keys from Map
// additionally check to see if move is in valid direction
// compare current letter to valid moves


 
const mapBoard = (board, guess) => {
  // create 2D array of key value pairs, [coordinate, letter]
	let b = board.map((a,i) => {
		return a.map((l,j) => {
			return [`${i}${j}`, l]
		})
  });
  
  // turn guess into an array of letters
	let g = guess.split('');

  // console.log(b)
  console.log('guess :',g)
  
  // all board positions as an array of arrays (not 2D array)
  let entries = [].concat(...b);
  // 0. find all starting point keys, iterate over them:
  let start = g[0];
  let startingPoints = entries.filter(entry => entry[1] === start);
		// return false if there are no starting points
  if(!startingPoints.length) return false;

  console.log('starting points: ', startingPoints)

  const findPoints = (letters, point, history) => {
    // return true if there are no letters left
    console.log('letters: ', letters)
    console.log('history: ', history)
    if (!letters.length) return true;
    // current position
    let currPoint = point[0].split('');
    let currRow = parseInt(currPoint[0]);
    let currCol = parseInt(currPoint[1]);
    
    // find next possible points
    const nextPoints = entries.filter(entry => {
      let coordinates = entry[0].split('');
      let row = parseInt(coordinates[0]);
      let col = parseInt(coordinates[1]);

      if(!history.includes(entry[0])) {
        if(entry[1] === letters[0]) {
          if(row === currRow || row+1 === currRow || row-1 === currRow) {
            if(col === currCol || col+1 === currCol || col-1 === currCol) {
              return true;
            }
          }
        }
      }
      return false
    });

    console.log('nextPoints', nextPoints)

    // return false if letters remain and there are no moves left
    if (letters.length && !nextPoints.length) { 
      return false;
    } else {
      // remove first letter
      // letters.shift();
      

      // recurz through the rest of the letters
      return nextPoints.some(p => {
        let nextLetters = letters.slice(1);
        let h = [...history, p[0]];
        return findPoints(nextLetters, p, h);
      });
    }
  }

  // if any iteration returns true, return true
  const guessValidity = startingPoints.some( p => {
    // start with rest of letters
    let guessStr = g.slice(1);
    return findPoints(guessStr, p, [p[0]]);
  });

  console.log(guessValidity)
  return guessValidity;
}



var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

// mapBoard(testBoard, 'C')



// const mapBoard = (board, guess) => {
// 	const b = board.map((a,i) => {
// 		return a.map((l,j) => {
// 			return [`${i}${j}`, l]
// 		})
//   });
  
// 	const g = guess.split('');
//   const start = g[0];
//   const boardPoints = [].concat(...b);
//   const startingPoints = boardPoints.filter(point => point[1] === start);

//   if(!startingPoints.length) return false;

//   const findPoints = (letters, point, history) => {
//     if (!letters.length) return true;

//     const currPoint = point[0].split('');
//     const currRow = parseInt(currPoint[0]);
//     const currCol = parseInt(currPoint[1]);
    
//     const nextPoints = boardPoints.filter(point => {
//       const coordinates = point[0].split('');
//       const row = parseInt(coordinates[0]);
//       const col = parseInt(coordinates[1]);

//       if(!history.includes(point[0])) {
//         if(point[1] === letters[0]) {
//           if(row === currRow || row+1 === currRow || row-1 === currRow) {
//             if(col === currCol || col+1 === currCol || col-1 === currCol) {
//               return true;
//             } else {
//               return false;
//             }
//           }
//         }
//       }    
//     });

//     if (letters.length && !nextPoints.length) return false;
  
//     letters.shift();

//     return nextPoints.some(nextPoint => {
//       const hist = [...history, nextPoint[0]];
//       return findPoints(letters, nextPoint, hist);
//     });
//   }

//   const guessValidity = startingPoints.some( p => {
//     const str = g.slice(1);
//     return findPoints(str, p, [p[0]]);
//   });

//   console.log(guessValidity)
//   return guessValidity;
// }


// mapBoard(testBoard, 'EAR') //true
// mapBoard(testBoard, 'EARS') //false
// mapBoard(testBoard, 'CEREAL') //false 
// mapBoard(testBoard, 'RSCAREIOYBAILNEA') //true

let shuffle = [
  ['L','H','A','R','R','G','A'],
  ['H','O','E','A','Y','C','L'],
  ['C','A','B','D','T','E','U'],
  ['C','N','A','Y','O','D','A'],
  ['R','O','K','T','L','I','R'],
  ['P','N','I','A','P','T','V'],
  ['G','M','S','E','M','R','S']
]


mapBoard(shuffle, 'LOBEDATLPEAS') //true
// mapBoard(shuffle, 'ROKANTYD') //false