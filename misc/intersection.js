// Find the intersection of two arrays. 
// Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?

const intersection = (a, b) => {
  const aLen = a.length;
  const bLen = b.length;
  if (!aLen || !bLen) return [];

  let len = aLen > bLen ? bLen : aLen;
  let intersectPoints = [];

  let setA = [...new Set(a)].sort();
  let setB = [...new Set(b)].sort();
  
  for (let i=0; i<len; i++) {
    if(setA[i] === setB[i]) {
      intersectPoints.push(setA[i])
    };
  }
  
  return intersectPoints;
}

console.log(intersection([1, 5, 4, 2], [8, 8, 8, 91, 4, 1, 3]))   // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12]))             // []