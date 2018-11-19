/* 
Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, 
and returns the missing number in the sequence (there are either no missing numbers, 
or exactly one missing number). 
Can you do it in O(N) time? Hint: There’s a clever formula you can use.
*/

const missing = (arr) => {
  if (arr.length < 2 || Math.max(...arr) === arr.length) return 'whoa';

  let index = new Set(arr);

  for (let i=1; i<arr.length+1; i++) {
    if (!index.has(i)) return i;
  }

  return undefined;
};

console.log(missing([])) // undefined
console.log(missing([1, 4, 3])) // 2
console.log(missing([2, 3, 4])) // 1
console.log(missing([5, 1, 4, 2])) // 3
console.log(missing([1, 2, 3, 4, 5, 6, 7, 8])) // undefined
console.log(missing([5, 6, 7, 8, 1, 2, 3, 4])) // undefined