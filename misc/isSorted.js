// Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = (arr) => {
  if (arr.length < 2) return true;

  let curr = arr[0];

  for (let i=1; i<arr.length; i++) {
    if (arr[i] < curr) return false;
    curr = arr[i];
  }
  
  return true;
}

console.log(isSorted([]))            
console.log(isSorted([3, 9, -3, 10]))
console.log(isSorted([-Infinity, -5, 0, 3, 9]))