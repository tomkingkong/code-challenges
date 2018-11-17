// Find the first index of a given data

const indexOf = (arr, n) => {
  if (!arr) return -1;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}

console.log(indexOf([1, 2, 3, 4], 5)) // -1
console.log(indexOf([1, 2, 3, 4], 3)) // 2