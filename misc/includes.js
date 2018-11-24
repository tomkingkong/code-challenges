//Return true or false indicating whether the given number appears 
//in the given sorted array. Can you do it in O(log(N)) time?

const includes = (a, n) => {
  let nums = [...a],
      middle = nums.length/2<<0;

  const checkMinMaxPivot = () => {
    let first = nums[0],
        last = nums[nums.length-1],
        pivot = nums[middle];
    if (n === pivot || n === first || n === last) return true;
  }

  if (checkMinMaxPivot()) return true;

  while (nums.length > 1) {
    if (checkMinMaxPivot()) return true;
    if (n > nums[middle]) {
      nums = nums.slice(middle+1);
    } else {
      nums = nums.slice(0, middle-1);
    }
  }
  return false;
}

console.log(includes([8], 8))            // true
console.log(includes([1, 3, 8, 10], 8))            // true
console.log(includes([1, 3, 8, 9, 15], 9))        // true
console.log(includes([1, 3, 8, 8, 15], 15))        // true
console.log(includes([1, 3, 8, 10, 15], 9))        // false