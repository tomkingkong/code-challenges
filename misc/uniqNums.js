// Takes an array of numbers, and returns the unique numbers. 
// Can you do it in O(N) time?

const uniq = arr => [...new Set(arr)];

console.log(uniq([1, 4, 2, 2, 2, 3, 4, 8]))